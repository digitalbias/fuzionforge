// Submits the lead form in-page so visitors stay on the site.
// Without JavaScript the form still posts normally and Formspark redirects to /thanks.html.
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var form = document.getElementById('lead-form');
  if (!form || !window.fetch) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type=submit]');
    var label = button.innerHTML;
    var data = {};
    new FormData(form).forEach(function (value, key) {
      if (key === 'interests') {
        data.interests = data.interests ? data.interests + ', ' + value : value;
      } else if (key !== '_redirect') {
        data[key] = value;
      }
    });

    button.disabled = true;
    button.textContent = 'Sending...';
    status.className = 'form-status';
    status.textContent = '';

    fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed');
        form.innerHTML = form.getAttribute('data-success') ||
          '<div class="form-done"><h3>Thanks, we got it.</h3>' +
          '<p>We’ll reach out within one business day to set up your call. ' +
          'Want to skip the back-and-forth? <a href="https://calendar.app.google/4KJy3WNjX9HsEJbZ9" rel="noopener">Pick a time on the calendar</a>.</p></div>';
      })
      .catch(function () {
        button.disabled = false;
        button.innerHTML = label;
        status.className = 'form-status err';
        status.innerHTML = 'Something went wrong. Please try again or email <a href="mailto:dcmitchell@fuzionforge.com">dcmitchell@fuzionforge.com</a>.';
      });
  });
})();

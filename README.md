# fuzionforge.com

Marketing site for Fusion Forge Company (dba Dialed In Trades). Plain static HTML/CSS/JS with no build step, served by GitHub Pages.

## Files

- `index.html`: the landing page, laid out on the StoryBrand (SB7) wireframe: header/one-liner, stakes, value, guide, 3-step plan, failure vs. success, explanatory paragraph, transitional + direct CTAs, junk drawer. Section comments in the file mark each part.
- `checklist.html`: the transitional-CTA lead magnet, an interactive 12-point Systems Leak Checklist that sends the score and checked items with the lead
- `thanks.html`: where the form redirects if JavaScript is off
- `404.html`: GitHub Pages "not found" page
- `assets/style.css`, `assets/site.js`, `assets/favicon.svg`
- `CNAME`: custom domain (`fuzionforge.com`)
- `.nojekyll`: tells Pages to serve files as-is

## Preview locally

    python3 -m http.server 8000

Then open http://localhost:8000.

## Deploy to GitHub Pages

1. Create a repo (e.g. `fuzionforge`) on GitHub and push this folder to `main`.
2. Repo **Settings → Pages**: Source = "Deploy from a branch", Branch = `main` / `(root)`.
3. Custom domain `fuzionforge.com` is already set by `CNAME`. At Hover, add DNS records:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<your-github-username>.github.io`
   Keep the existing MX records so `@fuzionforge.com` email keeps working.
4. Once the certificate is issued, tick **Enforce HTTPS**.

## Lead form

The form posts to Formspark (`https://submit-form.com/wCrWwiMxa`), the same endpoint the Dialed In Trades contact form uses. Each submission includes `source: fuzionforge.com` (or `fuzionforge.com/checklist`) so you can tell them apart. To route Fusion Forge leads separately, create a new form at formspark.io and swap the `action` URL in `index.html`.

The "book directly" link uses the Google Calendar booking page `https://calendar.app.google/4KJy3WNjX9HsEJbZ9`; change it in `index.html`, `thanks.html` and `assets/site.js` if that moves.

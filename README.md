Diag.net Comment Unhider

What it does
- Runs automatically on https://diag.net/ and all pages beneath it.
- Removes the class attribute from elements matching .not-accessible, just like:
    document.querySelectorAll('.not-accessible').forEach(el => el.removeAttribute('class'))
- Also watches for dynamically inserted comments or elements that receive the class later.

Install temporarily in Firefox
1. Open about:debugging#/runtime/this-firefox
2. Click “Load Temporary Add-on…”
3. Select manifest.json from this folder.

The temporary installation lasts until Firefox restarts. For permanent use, the add-on must be signed by Mozilla (for example, by submitting it to addons.mozilla.org).

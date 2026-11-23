# Diag.net Comment Unhider
A simple add-on to show or unblur comments that are already hidden on the website diag.net.

## How it works
- Runs automatically on [diag.net](https://diag.net/) and all pages beneath it.
- Removes the class attribute from elements matching `.not-accessible`, similar to:
```
    document.querySelectorAll('.not-accessible').forEach(el => el.removeAttribute('class'))
```
- Also watches for dynamically inserted comments or elements that receive the class later.

## Installation
Install automatically through the Firefox Add-on Store, or manually by downloading and installing the latest release.
### A. Use the [Firefox Add-on Store](https://addons.mozilla.org/en-CA/firefox/addon/diag-net-comment-unhider/)
### B. Manually install temporarily in Firefox
1. Download and extract the [latest release](https://github.com/syst3mboot/diagnet-comment-unhider/releases)
2. Open the url `about:debugging#/runtime/this-firefox` inside your Firefox browser
3. Click “Load Temporary Add-on…”
4. Select the `manifest.json` file from the extracted release files.

The temporary installation lasts until Firefox restarts. For permanent use, the add-on must be signed by Mozilla (for example, by submitting it to addons.mozilla.org), or installed through the add-on store.
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)

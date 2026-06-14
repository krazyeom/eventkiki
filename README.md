# eventkiki

## Usage (Remote Loader Method) 🌟

The Remote Loader method ensures you always use the latest version without manually updating your bookmark.

1. Create a new bookmark in your browser.
2. Copy the code below and paste it into the URL/Location field.
```javascript
javascript:(function(){
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/krazyeom/eventkiki/eventkiki_remote.js?t=' + Date.now();
  document.body.appendChild(script);
})();
```
3. Once registered, just click this bookmark on the target page.

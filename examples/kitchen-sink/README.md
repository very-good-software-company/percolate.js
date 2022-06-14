# Vanilla JS Progressive Enhancement for Web Components

## What is this?
This repo contains a simple JS module called `WebComponentRender.js` which allows you to compose your UI in HTML using custom web component tags which the library will find and lazy-load / progressive enhance using the ESM dynamic imports api. This means that you can compose your UI in static HTML and sprinkle in interactivity using custom tags and web components. I believe this allows for simpler, faster websites that rely on standardized web apis rather than third-party dependencies.

## How to Use
To start simply download the `WebComponentRender.js` file and include an ESM script module tag in your HTML page for it:
```
<script src="/WebComponentRender.js" type="module"></script>
```
This attaches a global variable to the `window` object called `WebComponentRender`. Now you are able to initialize the library and specify a few options such as which tags to find on the page as well as loading icon information:
```
<script type="module">
  window.WebComponentRender({
    url: '/',
    tagPartial: 'sean-',
    loader: '<div class="loader">Loading...</div>',
    loaderClass: 'loader'
  });
</script>
```
- url: Base URL for all import requests, usually the root of your website.
- tagPartial: Custom tag prefix. This allows the renderer to find all custom tags on the page and issue import requests for them. This means you should use the same prefix for all your custom tags.
- loader: Loading html to use that can be displayed as custom tag code is loaded.
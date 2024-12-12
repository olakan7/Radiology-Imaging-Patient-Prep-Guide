# Radiology Prep Guide Integration Guide

## Option 1: Web Component Integration (Recommended)

1. Add the following script to your website's `<head>` section:

```html
<script src="/radiology-prep/radiology-widget.js"></script>
```

2. Place the component anywhere in your HTML:

```html
<radiology-prep-guide></radiology-prep-guide>
```

## Option 2: Direct Integration

1. Add the following to your HTML where you want the app to appear:

```html
<div id="radiology-prep-root"></div>
<link rel="stylesheet" href="/radiology-prep/styles.css">
<script type="module" src="/radiology-prep/main.js"></script>
```

## Option 3: iframe Integration

If you need complete isolation, add this to your HTML:

```html
<iframe 
  src="/radiology-prep/index.html" 
  style="width: 100%; height: 800px; border: none;"
  title="Radiology Preparation Guide"
></iframe>
```

## Installation Steps

1. Copy the following directories to your web server:
   - `/radiology-prep/` (contains all assets)
   - `/images/custom/` (for custom images)

2. Update your server configuration to serve these static files.

3. If using a different base path, update the paths in the integration code accordingly.

## Customization

- To customize styles, create a `custom-styles.css` file and add:
  ```css
  radiology-prep-guide {
    /* Your custom styles */
  }
  ```

- To use custom images, place them in `/images/custom/` and update the paths in the configuration.

## Notes

- The app requires modern browser features including Web Components and ES Modules
- Ensure your server is configured to serve the correct MIME types for .js and .css files
- The app uses browser local storage for saving preferences and appointments
- For notification support, ensure your site uses HTTPS
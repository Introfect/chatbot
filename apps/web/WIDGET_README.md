# Chatbot Widget

A self-contained, embeddable chatbot widget built with React, TypeScript, and Tailwind CSS.

## Features

- 🎯 **Two-State Design**: Collapsed circular button and expanded full-screen chat
- 🎨 **Style Isolation**: Uses Shadow DOM to prevent CSS conflicts
- 📦 **Self-Contained**: All dependencies bundled (React, UI libraries, etc.)
- 🚀 **Easy Integration**: Simple script tag and custom element

## Build

```bash
pnpm run build:widget
```

This generates:
- `dist/widget/chatbot-widget.js` (~14MB uncompressed, ~2.8MB gzipped)
- `dist/widget/chatbot-widget.css` (~191KB uncompressed, ~82KB gzipped)

## Usage

### Basic Integration

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/chatbot-widget.css">
</head>
<body>
  <!-- Your page content -->
  
  <script src="path/to/chatbot-widget.js"></script>
  <chatbot-widget 
    button-text="Chat with us"
    api-url="https://your-api.com"
  ></chatbot-widget>
</body>
</html>
```

### CDN Integration (Future)

```html
<link rel="stylesheet" href="https://cdn.example.com/chatbot-widget.css">
<script src="https://cdn.example.com/chatbot-widget.js"></script>
<chatbot-widget button-text="Need help?"></chatbot-widget>
```

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `button-text` | string | "Chat with us" | Text displayed on the circular button |
| `api-url` | string | - | Backend API endpoint for chat functionality |

## Widget States

### Collapsed (Default)
- Circular button in bottom-right corner
- Shows button text and chat icon
- Hover effect with scale animation
- Fixed positioning with high z-index (9999)

### Expanded (On Click)
- Full-screen overlay covering entire viewport
- Chat interface with message history
- Input field for new messages
- Close button (X) in top-right corner
- Click close to return to collapsed state

## Architecture

```
chatbot-widget
├── Web Component (Shadow DOM)
│   ├── WidgetButton (Collapsed State)
│   └── WidgetOverlay (Expanded State)
│       ├── ChatWrapper (Message Display)
│       └── InputWrapper (Message Input)
└── Styles (Scoped to Shadow DOM)
```

## Development

### Testing Locally

1. Build the widget:
   ```bash
   pnpm run build:widget
   ```

2. Open the test page:
   ```bash
   open public/widget-test.html
   ```
   Or serve it with a local server:
   ```bash
   python -m http.server 8000
   # Visit: http://localhost:8000/public/widget-test.html
   ```

### File Structure

```
apps/web/
├── app/
│   ├── widget.tsx                    # Main entry point
│   ├── widget.css                    # Widget styles
│   └── components/
│       └── widget/
│           ├── WidgetButton.tsx      # Circular button component
│           └── WidgetOverlay.tsx     # Full-screen overlay component
├── vite.config.widget.ts             # Widget build configuration
└── public/
    └── widget-test.html              # Test page
```

## Technical Details

### Bundle Contents
- React 19.1.1
- React DOM 19.1.1
- All Radix UI components
- Lucide React icons
- AI SDK React
- Tailwind CSS (processed and scoped)
- All chat components and dependencies

### Browser Support
- Modern browsers with ES2020+ support
- Shadow DOM support required
- Custom Elements v1 support required

### Performance
- Initial load: ~2.8MB gzipped
- Lazy loading: Not implemented (single bundle)
- Caching: Recommended with long cache headers

## Future Enhancements

- [ ] Inline CSS into JS for true single-file widget
- [ ] Add theme customization via attributes
- [ ] Implement lazy loading for chat components
- [ ] Add position customization (bottom-left, top-right, etc.)
- [ ] Support for multiple widget instances
- [ ] Offline support with service worker
- [ ] Analytics integration
- [ ] Internationalization (i18n)

## Integration with SeedToScale Dummy Project

To integrate this widget into the seedtoscale-dummy project:

1. Copy the built files:
   ```bash
   cp dist/widget/chatbot-widget.* ../seedtoscale-dummy/public/
   ```

2. Add to HTML:
   ```html
   <link rel="stylesheet" href="/chatbot-widget.css">
   <script src="/chatbot-widget.js"></script>
   <chatbot-widget></chatbot-widget>
   ```

## Troubleshooting

### Widget not appearing
- Check browser console for errors
- Verify both CSS and JS files are loaded
- Ensure custom elements are supported

### Styles conflicting with host page
- Widget uses Shadow DOM for isolation
- If issues persist, check for `!important` rules in host page

### Chat not working
- Verify `api-url` attribute is set correctly
- Check network tab for API request failures
- Ensure CORS is configured on backend

## License

Internal use only - SeedToScale project

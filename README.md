# Profile Card Component

A semantic, accessible, and responsive profile card built with vanilla HTML, CSS, and JavaScript.

## Features

- Semantic HTML5 structure
- Fully accessible (ARIA, keyboard navigation)
- Responsive design (mobile-first)
- All elements include `data-testid` attributes for automated testing
- Real-time timestamp display

## Live Demo

[View Live Demo]()

## Local Development

### Prerequisites
- A modern web browser
- A local web server (optional, but recommended)

### Run Locally

1. Clone the repository:
```bash
git clone https://github.com/Mkalbani/hng-stage0-frontend.git
cd hng-stage0-frontend
```

2.  🌐 Live Demo


## Project Structure
```
hng-stage0-frontend/
|-/images
|____avatar.jpeg
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # Timestamp functionality
└── README.md           # This file
```

## Testing Elements

All required elements include `data-testid` attributes:

- `test-profile-card` - Root container
- `test-user-name` - User name
- `test-user-bio` - Biography text
- `test-user-time` - Current timestamp (milliseconds)
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social links container
- `test-user-social-twitter` - Twitter link
- `test-user-social-github` - GitHub link
- `test-user-social-linkedin` - LinkedIn link
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

## Accessibility Features

- Semantic HTML tags (`article`, `nav`, `section`, `figure`)
- Proper heading hierarchy
- Alt text for images
- Keyboard-focusable interactive elements
- Visible focus indicators
- External links with `rel="noopener noreferrer"`

## Responsive Breakpoints

- **Mobile**: < 768px (stacked layout)
- **Desktop**: ≥ 768px (side-by-side layout)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
```
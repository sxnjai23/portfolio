# Portfolio Website

A modern, responsive portfolio website with smooth animations, custom cursor, and interactive elements.

## Features

- Dark theme with gradient accents
- Custom cursor effect
- Smooth scrolling and animations
- Typing effect for job titles
- Animated skill bars
- Counter animation for stats
- Project cards with 3D tilt effect
- Responsive design for all devices
- Contact form with validation

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styles and animations
├── script.js       # Interactive features
└── README.md       # This file
```

## Customization Guide

### Personal Information

Open `index.html` and search/replace these placeholders:

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `Your Name` | Your full name | `John Doe` |
| `Your City` | Your location | `San Francisco, CA` |
| `your.email@example.com` | Your email | `john@example.com` |
| `+1 (234) 567-890` | Your phone number | `+1 (555) 123-4567` |
| `Your City, Country` | Your address | `San Francisco, USA` |
| `Full-Stack Developer` | Your job title | `React Developer` |

### Hero Section (Lines ~100-160)

- **Badge text**: Change "Available for work" status
- **Greeting**: Modify the "Hey, I'm" text
- **Stats**: Update numbers in `data-count` attributes
- **Social links**: Update `href` attributes for GitHub, LinkedIn, Twitter

### About Section (Lines ~170-250)

- **Profile image**: Change the `src` of `#about-img`
- **Description**: Update the about text paragraphs
- **Highlights**: Modify the three highlight items

### Skills Section (Lines ~260-350)

- **Skill categories**: Update category names and icons
- **Skill items**: Change skill names and `data-progress` values (0-100)
- **Skills cloud**: Add/remove cloud items

### Experience Section (Lines ~360-460)

- **Timeline items**: Update company names, roles, periods, descriptions
- **Tech tags**: Modify technologies listed for each position
- **Add/remove items**: Duplicate `.timeline-item` blocks for more positions

### Projects Section (Lines ~470-580)

- **Project cards**: Update images, titles, descriptions, and tech tags
- **Links**: Change GitHub and demo link `href` attributes
- **Featured project**: The first card spans full width

### Contact Section (Lines ~590-670)

- **Contact details**: Update email, phone, and location
- **Form**: The form is ready to use; connect to a backend service like Formspree or Netlify Forms

### Colors and Theme

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
  --bg-primary: #0a0a0f;      /* Main background */
  --bg-secondary: #111118;    /* Section backgrounds */
  --accent-primary: #6366f1;  /* Primary accent color */
  --accent-secondary: #8b5cf6; /* Secondary accent */
  --accent-tertiary: #a855f7;  /* Tertiary accent */
}
```

## Deployment

### Option 1: GitHub Pages

1. Create a repository named `yourusername.github.io`
2. Push all files to the repository
3. Enable GitHub Pages in repository settings

### Option 2: Netlify

1. Drag and drop the portfolio folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly

### Option 3: Vercel

```bash
npx vercel
```

## Contact Form Integration

To make the contact form functional, use one of these services:

### Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Netlify Forms
Add `netlify` attribute to the form:
```html
<form class="contact-form" id="contact-form" netlify>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.

---

Built with HTML, CSS, and JavaScript. No frameworks required.

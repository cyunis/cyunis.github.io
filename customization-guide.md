# Customization Guide for Robotics Engineering Portfolio

This guide will help you customize your robotics engineering portfolio website to match your personal style and showcase your unique projects. The website is built with Jekyll and designed to be easily customizable without requiring extensive coding knowledge.

## Table of Contents

1. [Basic Configuration](#basic-configuration)
2. [Adding Your Projects](#adding-your-projects)
3. [Customizing the Theme](#customizing-the-theme)
4. [Modifying Page Content](#modifying-page-content)
5. [Customizing the Layout](#customizing-the-layout)
6. [Adding Custom Features](#adding-custom-features)
7. [Maintenance Tips](#maintenance-tips)

## Basic Configuration

The main configuration file for your website is `_config.yml`. This file controls the site-wide settings.

### Essential Settings to Update

Open `_config.yml` and modify these key settings:

```yaml
title: Your Name - Robotics Engineering Portfolio
description: A showcase of my robotics engineering projects and skills
url: "https://yourusername.github.io"
baseurl: "" # Leave empty if using yourusername.github.io, or add /repository-name if using a project repository

# Social media profiles - update with your own
social:
  github: yourusername
  linkedin: yourlinkedinusername
  email: your.email@example.com
```

## Adding Your Projects

Projects are stored as Markdown files in the `_projects` directory. Each project has its own file with front matter and content.

### Creating a New Project

1. Create a new Markdown file in the `_projects` directory, e.g., `my-new-project.md`
2. Add the following front matter at the top of the file:

```yaml
---
layout: project
title: Your Project Title
date: 2025-04-01
categories: [category1, category2]
featured: true  # Set to true to display on the homepage
image: /assets/images/projects/your-project-image.jpg
excerpt: A brief description of your project that will appear in the project grid.
gallery:
  - url: /assets/images/projects/project-image-1.jpg
    alt: Image description
    caption: Optional caption for the image
  - url: /assets/images/projects/project-image-2.jpg
    alt: Another image description
    caption: Another optional caption
video: https://www.youtube.com/embed/your-video-id  # Optional YouTube embed
---
```

3. Below the front matter, add your project content using Markdown:

```markdown
## Project Overview

Describe your project here. You can use Markdown formatting for **bold**, *italic*, and other styles.

## Technical Specifications

- Item 1
- Item 2
- Item 3

## Development Process

Explain your development process here.

## Challenges and Solutions

Discuss challenges you faced and how you solved them.

## Results

Share the outcomes of your project.

## Future Improvements

List potential future enhancements.
```

4. Add your project images to the `assets/images/projects/` directory

### Project Front Matter Options

| Option | Description |
|--------|-------------|
| `layout` | Always use `project` for project pages |
| `title` | The title of your project |
| `date` | The completion date (YYYY-MM-DD format) |
| `categories` | Array of categories for filtering (e.g., [autonomous, industrial]) |
| `featured` | Set to `true` to display on the homepage |
| `image` | Main image path for the project card and header |
| `excerpt` | Brief description for the project card |
| `gallery` | Array of additional images with captions |
| `video` | YouTube embed URL (optional) |

## Customizing the Theme

### Colors and Styling

The main colors and styling variables are defined in the CSS files in the `assets/css/` directory.

To change the color scheme:

1. Open `assets/css/main.css`
2. Locate the `:root` section at the top
3. Modify the color variables:

```css
:root {
  --primary-color: #2563eb; /* Change to your preferred primary color */
  --secondary-color: #4b5563; /* Change to your preferred secondary color */
  --accent-color: #10b981; /* Change to your preferred accent color */
  --background-color: #ffffff; /* Change for background */
  --text-color: #1f2937; /* Change for main text */
}
```

### Fonts

To change the fonts:

1. Open `assets/css/visual-enhancements.css`
2. Locate the font import at the top:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap');
```

3. Replace with your preferred Google Fonts
4. Update the font-family in the body selector in `main.css`:

```css
body {
  font-family: 'Your-Font-Name', sans-serif;
  /* other properties */
}
```

## Modifying Page Content

### Homepage

To modify the homepage:

1. Open `index.html`
2. Update the hero section content:

```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Your Custom Headline</h1>
      <p>Your custom introduction text goes here</p>
      <a href="{{ '/projects' | relative_url }}" class="btn btn-primary">View Projects</a>
    </div>
  </div>
</section>
```

3. The featured projects section will automatically display projects with `featured: true` in their front matter

### About Page

To update your about page:

1. Open `about.html`
2. Modify the content sections:
   - Profile information
   - Education
   - Skills
   - Experience

### Contact Page

To update your contact page:

1. Open `contact.html`
2. Update your contact information
3. For the contact form to work, update the Formspree endpoint:

```html
<form id="contact-form" action="https://formspree.io/f/your-formspree-endpoint" method="POST">
```

4. Sign up at [Formspree](https://formspree.io/) to get your endpoint

## Customizing the Layout

### Header and Navigation

To modify the header and navigation:

1. Open `_includes/header.html`
2. Update the navigation links as needed:

```html
<nav class="site-nav">
  <ul>
    <li><a href="{{ '/' | relative_url }}" class="{% if page.url == '/' %}active{% endif %}">Home</a></li>
    <li><a href="{{ '/projects' | relative_url }}" class="{% if page.url contains '/projects' %}active{% endif %}">Projects</a></li>
    <li><a href="{{ '/about' | relative_url }}" class="{% if page.url == '/about' %}active{% endif %}">About</a></li>
    <li><a href="{{ '/contact' | relative_url }}" class="{% if page.url == '/contact' %}active{% endif %}">Contact</a></li>
    <!-- Add more links as needed -->
  </ul>
</nav>
```

### Footer

To modify the footer:

1. Open `_includes/footer.html`
2. Update the footer content and social links:

```html
<div class="footer-social">
  <ul>
    <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    <!-- Add more social links as needed -->
  </ul>
</div>
```

## Adding Custom Features

### Adding a Blog

To add a blog to your portfolio:

1. Create a `_posts` directory in the root of your project
2. Add the following to your `_config.yml`:

```yaml
collections:
  posts:
    output: true
    permalink: /blog/:year/:month/:day/:title/
```

3. Create a `blog.html` file in the root directory:

```html
---
layout: default
title: Blog
permalink: /blog/
---

<section class="blog-section">
  <div class="container">
    <h1 class="page-title">Blog</h1>
    
    <div class="blog-posts">
      {% for post in site.posts %}
        <div class="blog-post">
          <h2 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <a href="{{ post.url | relative_url }}" class="btn btn-outline">Read More</a>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
```

4. Create a `_layouts/post.html` file for blog post layout
5. Add blog posts as Markdown files in the `_posts` directory with the naming convention `YYYY-MM-DD-title.md`

### Adding a Resume/CV Page

To add a resume page:

1. Create a `resume.html` file in the root directory
2. Add your resume content using HTML and CSS
3. Add a link to the resume page in the navigation menu

## Maintenance Tips

### Regular Updates

To keep your portfolio fresh and relevant:

1. **Update Projects**: Add new projects as you complete them
2. **Refresh Content**: Periodically review and update your about page and skills
3. **Check Links**: Ensure all links are working correctly
4. **Update Dependencies**: Periodically update Jekyll and its dependencies

### Backup Your Content

Always maintain a backup of your portfolio content:

1. Keep a local copy of all files
2. Use Git version control to track changes
3. Consider using a private repository as an additional backup

### Performance Optimization

To ensure your site loads quickly:

1. **Optimize Images**: Compress images before uploading
   - Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
   - Keep image dimensions appropriate for their display size
   - Consider using WebP format for better compression

2. **Minimize JavaScript**: Combine and minify JavaScript files
   - Use tools like [Terser](https://terser.org/) for JavaScript minification

3. **Optimize CSS**: Combine and minify CSS files
   - Use tools like [cssnano](https://cssnano.co/) for CSS optimization

4. **Enable Caching**: Add appropriate cache headers
   - Create a `.htaccess` file for Apache servers or configure Netlify/Vercel settings

### Security Considerations

To maintain security:

1. **Keep Jekyll Updated**: Regularly update Jekyll and its dependencies
2. **Use HTTPS**: Ensure your site uses HTTPS (GitHub Pages provides this automatically)
3. **Sanitize User Inputs**: If you add any forms or interactive elements
4. **Avoid Exposing Sensitive Information**: Don't include private data in your repository

### Testing

Regularly test your website:

1. **Cross-Browser Testing**: Check your site in different browsers (Chrome, Firefox, Safari, Edge)
2. **Mobile Testing**: Verify responsiveness on various device sizes
3. **Accessibility Testing**: Use tools like [WAVE](https://wave.webaim.org/) to check accessibility
4. **Performance Testing**: Use [Google PageSpeed Insights](https://pagespeed.web.dev/) to evaluate performance

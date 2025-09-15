# GitHub Pages Deployment Instructions

This guide will walk you through the process of deploying your robotics engineering portfolio website to GitHub Pages, which provides free hosting directly from your GitHub repository.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Basic familiarity with Git commands

## Step 1: Create a New GitHub Repository

1. Log in to your GitHub account at [github.com](https://github.com)
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository: `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
4. Make sure the repository is set to "Public"
5. Click "Create repository"

> **Note**: Using the format `yourusername.github.io` for your repository name will make your site available at `https://yourusername.github.io`. If you use a different name, your site will be available at `https://yourusername.github.io/repository-name`.

## Step 2: Clone the Repository Locally

Open your terminal or command prompt and run:

```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

## Step 3: Copy Your Portfolio Website Files

Copy all the files from the portfolio website directory to your local repository folder. Make sure to include:

- All HTML files
- The `_layouts` directory
- The `_includes` directory
- The `_projects` directory
- The `assets` directory with CSS, JS, and images
- The `_config.yml` file
- Any other necessary files

## Step 4: Configure Jekyll for GitHub Pages

1. Create a file named `Gemfile` in the root of your repository with the following content:

```ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-seo-tag"
gem "jekyll-sitemap"
```

2. Make sure your `_config.yml` file includes the following settings:

```yaml
# Update these with your information
title: Your Name - Robotics Engineering Portfolio
description: A showcase of my robotics engineering projects and skills
url: "https://yourusername.github.io" # Replace with your GitHub Pages URL

# Build settings
markdown: kramdown
remote_theme: pages-themes/minimal@v0.2.0
plugins:
  - jekyll-remote-theme
  - jekyll-seo-tag
  - jekyll-sitemap

collections:
  projects:
    output: true
    permalink: /projects/:path/

# Default front matter for projects
defaults:
  - scope:
      path: ""
      type: "projects"
    values:
      layout: "project"
```

## Step 5: Commit and Push Your Files

Run the following commands to commit your files and push them to GitHub:

```bash
git add .
git commit -m "Initial commit of portfolio website"
git push origin main
```

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

GitHub will now build your site. This process usually takes a few minutes.

## Step 7: Verify Your Deployment

After GitHub has built your site, you can access it at `https://yourusername.github.io`. If you encounter any issues, check the "Actions" tab in your repository to see the build logs.

## Step 8: Set Up a Custom Domain (Optional)

If you have a custom domain, you can configure GitHub Pages to use it:

1. Go to your repository's "Settings"
2. Scroll down to the "GitHub Pages" section
3. Under "Custom domain", enter your domain name (e.g., `www.yourname.com`)
4. Click "Save"
5. Configure your domain's DNS settings:
   - For an apex domain (e.g., `yourname.com`), create A records pointing to GitHub's IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For a subdomain (e.g., `www.yourname.com`), create a CNAME record pointing to `yourusername.github.io`

6. Create a file named `CNAME` in the root of your repository with your custom domain:
   ```
   www.yourname.com
   ```

## Updating Your Website

To update your website in the future:

1. Make changes to your local files
2. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

GitHub will automatically rebuild your site with the new changes.

## Troubleshooting

If your site isn't displaying correctly:

1. Check the "Actions" tab in your repository to see if there are any build errors
2. Verify that your repository name is correct (`yourusername.github.io`)
3. Make sure your files are in the correct structure for Jekyll
4. Check that your `_config.yml` file is properly formatted

For more detailed information, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).

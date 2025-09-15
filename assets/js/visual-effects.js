// Enhanced visual effects and animations for the portfolio
document.addEventListener('DOMContentLoaded', function() {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize progress bar
  initProgressBar();
  
  // Initialize back to top button
  initBackToTop();
  
  // Initialize theme selector
  initThemeSelector();
  
  // Initialize page loader
  initPageLoader();
});

/**
 * Initialize scroll animations for elements
 */
function initScrollAnimations() {
  // Add fade-in-up class to elements that should animate on scroll
  const animatedElements = document.querySelectorAll('.project-card, .section-title, .about-content > *, .contact-content > *');
  
  animatedElements.forEach(element => {
    element.classList.add('fade-in-up');
  });
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe each element
  document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
  });
}

/**
 * Initialize progress bar that shows scroll position
 */
function initProgressBar() {
  // Create progress bar element
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  document.body.appendChild(progressBar);
  
  // Update progress bar width on scroll
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    progressBar.style.width = scrollPercentage + '%';
  });
}

/**
 * Initialize back to top button
 */
function initBackToTop() {
  // Create back to top button
  const backToTop = document.createElement('div');
  backToTop.classList.add('back-to-top');
  backToTop.innerHTML = '&uarr;';
  document.body.appendChild(backToTop);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  // Scroll to top when clicked
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Initialize theme selector
 */
function initThemeSelector() {
  // Create theme selector elements
  const themeSelector = document.createElement('div');
  themeSelector.classList.add('theme-selector');
  themeSelector.innerHTML = '🎨';
  themeSelector.setAttribute('data-tooltip', 'Change Theme');
  
  const themeOptions = document.createElement('div');
  themeOptions.classList.add('theme-options');
  
  // Define themes
  const themes = [
    { name: 'Blue (Default)', primary: '#2563eb', accent: '#10b981' },
    { name: 'Purple', primary: '#8b5cf6', accent: '#ec4899' },
    { name: 'Green', primary: '#10b981', accent: '#6366f1' },
    { name: 'Orange', primary: '#f97316', accent: '#06b6d4' },
    { name: 'Red', primary: '#ef4444', accent: '#f59e0b' }
  ];
  
  // Create theme options
  themes.forEach(theme => {
    const option = document.createElement('div');
    option.classList.add('theme-option');
    
    const colorSwatch = document.createElement('div');
    colorSwatch.classList.add('theme-color');
    colorSwatch.style.backgroundColor = theme.primary;
    
    const themeName = document.createElement('span');
    themeName.textContent = theme.name;
    
    option.appendChild(colorSwatch);
    option.appendChild(themeName);
    
    // Change theme on click
    option.addEventListener('click', () => {
      document.documentElement.style.setProperty('--primary-color', theme.primary);
      document.documentElement.style.setProperty('--primary-dark', adjustColor(theme.primary, -20));
      document.documentElement.style.setProperty('--primary-light', adjustColor(theme.primary, 20));
      document.documentElement.style.setProperty('--accent-color', theme.accent);
      document.documentElement.style.setProperty('--accent-dark', adjustColor(theme.accent, -20));
      document.documentElement.style.setProperty('--accent-light', adjustColor(theme.accent, 20));
      
      // Save theme preference
      localStorage.setItem('theme', JSON.stringify({
        primary: theme.primary,
        accent: theme.accent
      }));
      
      // Hide options after selection
      themeOptions.classList.remove('show');
    });
    
    themeOptions.appendChild(option);
  });
  
  // Toggle theme options
  themeSelector.addEventListener('click', () => {
    themeOptions.classList.toggle('show');
  });
  
  // Close theme options when clicking outside
  document.addEventListener('click', (e) => {
    if (!themeSelector.contains(e.target)) {
      themeOptions.classList.remove('show');
    }
  });
  
  // Append to body
  themeSelector.appendChild(themeOptions);
  document.body.appendChild(themeSelector);
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    const theme = JSON.parse(savedTheme);
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--primary-dark', adjustColor(theme.primary, -20));
    document.documentElement.style.setProperty('--primary-light', adjustColor(theme.primary, 20));
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--accent-dark', adjustColor(theme.accent, -20));
    document.documentElement.style.setProperty('--accent-light', adjustColor(theme.accent, 20));
  }
}

/**
 * Initialize page loader
 */
function initPageLoader() {
  // Create loader elements
  const loader = document.createElement('div');
  loader.classList.add('loader');
  
  const spinner = document.createElement('div');
  spinner.classList.add('loader-spinner');
  
  loader.appendChild(spinner);
  document.body.appendChild(loader);
  
  // Hide loader when page is loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      
      // Remove loader after animation
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 500);
  });
}

/**
 * Adjust color brightness
 * @param {string} color - Hex color code
 * @param {number} amount - Amount to adjust (-100 to 100)
 * @returns {string} - Adjusted hex color
 */
function adjustColor(color, amount) {
  // Remove # if present
  color = color.replace('#', '');
  
  // Convert to RGB
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);
  
  // Adjust each channel
  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));
  
  // Convert back to hex
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/**
 * Add accessibility features
 */
function addAccessibilityFeatures() {
  // Add skip link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.classList.add('skip-link');
  skipLink.textContent = 'Skip to main content';
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add main content ID
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.id = 'main-content';
    mainContent.setAttribute('tabindex', '-1');
  }
  
  // Add aria labels to navigation
  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(link => {
    link.setAttribute('aria-label', link.textContent);
  });
}

// Call accessibility function
window.addEventListener('DOMContentLoaded', addAccessibilityFeatures);

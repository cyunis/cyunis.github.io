// Main JavaScript file for Robotics Engineering Portfolio

document.addEventListener('DOMContentLoaded', function() {
  // Initialize project grid filtering
  initProjectFilters();
  
  // Initialize animations for project cards
  initProjectAnimations();
  
  // Initialize form validation
  initContactForm();
});

/**
 * Initialize project filtering functionality
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (!filterButtons.length || !projectCards.length) return;
  
  // Add click event to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get filter value
      const filterValue = this.getAttribute('data-filter');
      
      // Filter projects
      filterProjects(filterValue, projectCards);
    });
  });
}

/**
 * Filter projects based on category
 * @param {string} filter - Category to filter by
 * @param {NodeList} projects - List of project elements
 */
function filterProjects(filter, projects) {
  projects.forEach(project => {
    // Remove animation classes
    project.classList.remove('fade-in', 'scale-in', 'slide-in');
    
    // Get project categories
    const categories = project.getAttribute('data-categories');
    
    // Show/hide projects based on filter
    if (filter === 'all' || categories.includes(filter)) {
      project.classList.remove('hidden');
      
      // Add animation with slight delay for staggered effect
      setTimeout(() => {
        project.classList.add('scale-in');
      }, Math.random() * 200);
    } else {
      project.classList.add('hidden');
    }
  });
}

/**
 * Initialize animations for project cards
 */
function initProjectAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  
  if (!projectCards.length) return;
  
  // Add initial animation to all cards
  projectCards.forEach((card, index) => {
    // Stagger the animations
    setTimeout(() => {
      card.classList.add('fade-in');
    }, index * 100);
    
    // Add hover effect for project images
    const projectImage = card.querySelector('.project-image');
    if (projectImage) {
      card.addEventListener('mouseenter', () => {
        projectImage.style.transform = 'scale(1.05)';
      });
      
      card.addEventListener('mouseleave', () => {
        projectImage.style.transform = 'scale(1)';
      });
    }
  });
}

/**
 * Initialize contact form validation
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // For GitHub Pages, you'll need to use a form service like Formspree
    // This is just a placeholder - the form will be submitted to Formspree
    this.submit();
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  });
}

/**
 * Lazy load images for better performance
 */
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  if (!images.length) return;
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  // Observe each image
  images.forEach(img => {
    observer.observe(img);
  });
}

/**
 * Toggle mobile navigation menu
 */
function toggleMobileMenu() {
  const navMenu = document.querySelector('.site-nav ul');
  navMenu.classList.toggle('show');
}

// Add mobile menu toggle button for responsive design
function initMobileMenu() {
  const header = document.querySelector('.header-content');
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.classList.add('mobile-menu-btn');
  mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  
  // Only add the button on mobile screens
  if (window.innerWidth <= 768) {
    header.appendChild(mobileMenuBtn);
  }
  
  // Update on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      if (!document.querySelector('.mobile-menu-btn')) {
        header.appendChild(mobileMenuBtn);
      }
    } else {
      const btn = document.querySelector('.mobile-menu-btn');
      if (btn) {
        btn.remove();
      }
      // Ensure menu is visible on desktop
      document.querySelector('.site-nav ul').classList.remove('show');
    }
  });
}

// Call additional initialization functions
window.addEventListener('load', () => {
  lazyLoadImages();
  initMobileMenu();
});

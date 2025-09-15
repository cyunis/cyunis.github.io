// Enhanced interactive features for project grid
document.addEventListener('DOMContentLoaded', function() {
  // Project grid masonry layout
  initMasonryLayout();
  
  // Project image lightbox
  initLightbox();
  
  // Project search functionality
  initProjectSearch();
  
  // Project sorting options
  initProjectSorting();
});

/**
 * Initialize masonry layout for project grid
 */
function initMasonryLayout() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;
  
  // Check if imagesLoaded and Masonry are available
  if (typeof imagesLoaded === 'function' && typeof Masonry === 'function') {
    imagesLoaded(grid, function() {
      new Masonry(grid, {
        itemSelector: '.project-card',
        columnWidth: '.project-card',
        percentPosition: true
      });
    });
  } else {
    console.log('Masonry layout requires imagesLoaded and Masonry libraries');
    // Fallback to CSS grid
    grid.style.display = 'grid';
  }
}

/**
 * Initialize lightbox for project images
 */
function initLightbox() {
  const projectImages = document.querySelectorAll('.project-image img, .gallery-item img');
  if (!projectImages.length) return;
  
  projectImages.forEach(img => {
    img.addEventListener('click', function() {
      openLightbox(this.src, this.alt);
    });
  });
}

/**
 * Open lightbox with image
 * @param {string} src - Image source
 * @param {string} alt - Image alt text
 */
function openLightbox(src, alt) {
  // Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  
  const lightboxContent = document.createElement('div');
  lightboxContent.classList.add('lightbox-content');
  
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || '';
  
  const caption = document.createElement('p');
  caption.classList.add('lightbox-caption');
  caption.textContent = alt || '';
  
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('lightbox-close');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(lightbox);
  });
  
  // Append elements
  lightboxContent.appendChild(img);
  if (alt) lightboxContent.appendChild(caption);
  lightboxContent.appendChild(closeBtn);
  lightbox.appendChild(lightboxContent);
  
  // Add to body
  document.body.appendChild(lightbox);
  
  // Close on background click
  lightbox.addEventListener('click', function(e) {
    if (e.target === this) {
      document.body.removeChild(lightbox);
    }
  });
}

/**
 * Initialize project search functionality
 */
function initProjectSearch() {
  const projectsSection = document.querySelector('.projects-section');
  if (!projectsSection) return;
  
  // Create search input
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('project-search');
  
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search projects...';
  searchInput.classList.add('search-input');
  
  searchContainer.appendChild(searchInput);
  
  // Insert before filters
  const filterContainer = document.querySelector('.project-filters');
  if (filterContainer) {
    projectsSection.insertBefore(searchContainer, filterContainer);
  }
  
  // Add search functionality
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      const title = card.querySelector('.project-title').textContent.toLowerCase();
      const excerpt = card.querySelector('.project-excerpt').textContent.toLowerCase();
      const categories = card.getAttribute('data-categories').toLowerCase();
      
      if (title.includes(searchTerm) || excerpt.includes(searchTerm) || categories.includes(searchTerm)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
}

/**
 * Initialize project sorting options
 */
function initProjectSorting() {
  const projectsSection = document.querySelector('.projects-section');
  if (!projectsSection) return;
  
  // Create sort dropdown
  const sortContainer = document.createElement('div');
  sortContainer.classList.add('project-sort');
  
  const sortLabel = document.createElement('label');
  sortLabel.textContent = 'Sort by: ';
  sortLabel.htmlFor = 'sort-select';
  
  const sortSelect = document.createElement('select');
  sortSelect.id = 'sort-select';
  
  const options = [
    { value: 'newest', text: 'Newest First' },
    { value: 'oldest', text: 'Oldest First' },
    { value: 'title-asc', text: 'Title (A-Z)' },
    { value: 'title-desc', text: 'Title (Z-A)' }
  ];
  
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    sortSelect.appendChild(optionElement);
  });
  
  sortContainer.appendChild(sortLabel);
  sortContainer.appendChild(sortSelect);
  
  // Insert before filters
  const filterContainer = document.querySelector('.project-filters');
  if (filterContainer) {
    projectsSection.insertBefore(sortContainer, filterContainer);
  }
  
  // Add sorting functionality
  sortSelect.addEventListener('change', function() {
    const sortValue = this.value;
    const projectsGrid = document.querySelector('.projects-grid');
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    
    // Sort projects
    projectCards.sort((a, b) => {
      if (sortValue === 'newest' || sortValue === 'oldest') {
        const dateA = new Date(a.getAttribute('data-date') || '2000-01-01');
        const dateB = new Date(b.getAttribute('data-date') || '2000-01-01');
        
        return sortValue === 'newest' ? dateB - dateA : dateA - dateB;
      } else if (sortValue === 'title-asc' || sortValue === 'title-desc') {
        const titleA = a.querySelector('.project-title').textContent;
        const titleB = b.querySelector('.project-title').textContent;
        
        return sortValue === 'title-asc' 
          ? titleA.localeCompare(titleB) 
          : titleB.localeCompare(titleA);
      }
    });
    
    // Remove all projects
    projectCards.forEach(card => card.remove());
    
    // Add sorted projects
    projectCards.forEach(card => {
      projectsGrid.appendChild(card);
      
      // Add animation
      card.classList.remove('fade-in', 'scale-in', 'slide-in');
      setTimeout(() => {
        card.classList.add('fade-in');
      }, 10);
    });
  });
}

// Add CSS for new interactive features
function addInteractiveStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Project Search */
    .project-search {
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .search-input {
      padding: 0.75rem 1rem;
      width: 100%;
      max-width: 500px;
      border: 1px solid var(--medium-gray);
      border-radius: var(--border-radius);
      font-size: 1rem;
    }
    
    /* Project Sort */
    .project-sort {
      margin-bottom: 2rem;
      text-align: center;
    }
    
    #sort-select {
      padding: 0.5rem;
      border: 1px solid var(--medium-gray);
      border-radius: var(--border-radius);
      font-size: 0.9rem;
    }
    
    /* Lightbox */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    
    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }
    
    .lightbox-content img {
      max-width: 100%;
      max-height: 80vh;
      display: block;
      border: 2px solid white;
    }
    
    .lightbox-caption {
      color: white;
      text-align: center;
      padding: 1rem;
    }
    
    .lightbox-close {
      position: absolute;
      top: -40px;
      right: 0;
      color: white;
      background: transparent;
      border: none;
      font-size: 2rem;
      cursor: pointer;
    }
  `;
  
  document.head.appendChild(style);
}

// Call the function to add styles
window.addEventListener('DOMContentLoaded', addInteractiveStyles);

// Initialize SVG interactions for scripture references
export function initializeSVGInteractions() {
  // Find all gold-colored text elements in SVGs
  document.querySelectorAll('text[fill="#fbd38d"]').forEach(element => {
    // Add hover functionality
    element.style.cursor = 'pointer';
    element.style.transition = 'all 0.3s ease';

    element.addEventListener('mouseenter', () => {
      element.setAttribute('fill', 'white');
      element.style.filter = 'drop-shadow(0 0 6px rgba(255,255,255,0.8))';
    });
    
    element.addEventListener('mouseleave', () => {
      element.setAttribute('fill', '#fbd38d');
      element.style.filter = 'none';
    });

    // Add Bible Gateway link functionality
    element.addEventListener('click', (e) => {
      const reference = e.target.textContent.trim();
      window.open(
        `https://www.biblegateway.com/passage/?search=${reference}&version=NASB`,
        '_blank'
      );
    });
  });
}

// Handle SVG loading and initialization
export function setupSVGContainer(container) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        initializeSVGInteractions();
      }
    });
  });

  observer.observe(container, {
    childList: true,
    subtree: true
  });
}

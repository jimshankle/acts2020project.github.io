import { initializeSVGInteractions, setupSVGContainer } from './svgInteractions.js';

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize interactive features for any SVGs already on the page
  initializeSVGInteractions();

  // Set up observers for SVG containers that might be added dynamically
  document.querySelectorAll('.infographic-container').forEach(container => {
    setupSVGContainer(container);
  });
});

// Handle Bible Gateway links outside of SVGs
document.querySelectorAll('.scripture-ref').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const reference = link.dataset.reference || link.textContent.trim();
    window.open(
      `https://www.biblegateway.com/passage/?search=${reference}&version=NASB`,
      '_blank'
    );
  });
});

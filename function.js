const pages = ['home', 'about', 'projects', 'contact'];
const buttons = pages.map(page => document.getElementById(page + '-btn'));
const pageElements = pages.map(page => document.getElementById(page));

// Handle page navigation
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and pages
        buttons.forEach(btn => btn.classList.remove('active'));
        pageElements.forEach(page => page.classList.remove('active'));
        
        // Add active class to clicked button and corresponding page
        button.classList.add('active');
        pageElements[index].classList.add('active');
    });
});

// Handle image modal on left-click (existing functionality for all images)
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
// Add click event to all images (left-click)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', (e) => {
        // Prevent default if needed, but for images, usually not
        modalImg.src = img.src;
        modal.style.display = 'flex';
    });
});
// Close modal on click (background)
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
// NEW: Handle image modal on right-click for homepage and projects images
document.addEventListener('DOMContentLoaded', function() {
    // Select images to enable right-click modal: homepage image and project images
    const rightClickImages = document.querySelectorAll('#home-img, .project-item img');
    // Add right-click event to each selected image
    rightClickImages.forEach(img => {
        img.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Prevent default right-click menu
            modalImg.src = this.src; // Set modal image to the clicked image
            modal.style.display = 'flex'; // Show the modal (using flex for centering)
        });
    });
});

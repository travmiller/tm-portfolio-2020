// Lightbox functionality
document.addEventListener('DOMContentLoaded', function () {
  // Get all images with lightbox-image class
  const images = document.querySelectorAll('.lightbox-image');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.close-lightbox');

  // Add click event to each image
  images.forEach(img => {
    img.addEventListener('click', function () {
      lightbox.style.display = 'block';
      lightboxImg.src = this.src;
      caption.innerHTML = this.alt;

      // Prevent scrolling when lightbox is open
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox when clicking X button
  closeBtn.addEventListener('click', function () {
    lightbox.style.display = 'none';

    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Close lightbox with ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

// Fade-in on scroll functionality
document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.screen');

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  targets.forEach(target => {
    observer.observe(target);
  });
}); 
document.addEventListener('DOMContentLoaded', function() {
  // Scroll animation for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  const teamMembers = document.querySelectorAll('.team-member');
  
  // Function to check if element is in viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
          rect.bottom >= 0
      );
  }
  
  // Function to handle scroll animation
  function handleScrollAnimation() {
      // Timeline items animation
      timelineItems.forEach(item => {
          if (isInViewport(item)) {
              item.classList.add('visible');
          }
      });
      
      // Team members animation
      teamMembers.forEach((member, index) => {
          if (isInViewport(member)) {
              setTimeout(() => {
                  member.classList.add('visible');
              }, index * 150); // Staggered animation
          }
      });
  }
  
  // Initial check
  handleScrollAnimation();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Glitch effect for hero title
  const glitchElement = document.querySelector('.glitch');
  if (glitchElement) {
      setInterval(() => {
          glitchElement.style.animation = 'none';
          void glitchElement.offsetWidth; // Trigger reflow
          glitchElement.style.animation = '';
      }, 5000);
  }
});
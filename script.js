document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links and sections
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    const contentArea = document.querySelector('.content');
    
    // Set About as active by default
    document.querySelector('a[href="#about"]').classList.add('active');
    
    // Function to update active navigation item based on scroll position
    function updateActiveNavOnScroll() {
        let currentSection = '';
        
        // Determine which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            // If we've scrolled to or past this section, but not past the next one
            if (contentArea.scrollTop >= sectionTop - 100 && 
                contentArea.scrollTop < sectionTop + sectionHeight - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update the active class on navigation items
        if (currentSection) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Scroll to the target section
            contentArea.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Listen for scroll events on the content area
    contentArea.addEventListener('scroll', updateActiveNavOnScroll);
    
    // Initial check for active section on page load
    updateActiveNavOnScroll();
});
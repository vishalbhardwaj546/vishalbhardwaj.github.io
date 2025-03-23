document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show the target section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            
            // Scroll to top of content area on mobile
            if (window.innerWidth <= 768) {
                document.querySelector('.content').scrollTop = 0;
            }
        });
    });
    
    // Initialize with the active section from navigation
    const activeNavItem = document.querySelector('.nav-item.active');
    if (activeNavItem) {
        const targetId = activeNavItem.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    } else {
        // Default to experience section if no active nav item
        document.getElementById('experience').classList.add('active');
        document.querySelector('a[href="#experience"]').classList.add('active');
    }
});
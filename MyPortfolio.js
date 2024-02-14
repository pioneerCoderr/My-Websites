
// ........Sticky nav-bar.........

let header = document.querySelector('nav');

// ........Scroll Reveal............

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
    });

    ScrollReveal().reveal('.firstSection, .heading, .left', { origin: 'top' });
    ScrollReveal().reveal('.rightSection img, .secondSection, .project-box, .contact-section form, .btn, .purple, .wrapper-content, .wrapper-heading h2', { origin: 'bottom' });
    ScrollReveal().reveal('.aboutImg', { origin: 'left' });
    // ScrollReveal().reveal('.tagline', { delay: 500 });




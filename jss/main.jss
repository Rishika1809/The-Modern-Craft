document.addEventListener('DOMContentLoaded', () => {
    
    /* --- CONFIGURATION --- */
    // REPLACE THIS WITH YOUR REAL NUMBER
    const WHATSAPP_NUMBER = "917042964343"; 

    /* --- MOBILE NAVIGATION --- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    /* --- WHATSAPP ORDERING LOGIC --- */
    const orderButtons = document.querySelectorAll('.js-order-whatsapp');

    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get product name from data attribute or fallback to page title
            const productName = button.getAttribute('data-product') || "a product";
            
            // Create the message
            const message = `Hi, I'd like to order the ${productName} from The Modern Craft Co.`;
            
            // Encode URI
            const encodedMessage = encodeURIComponent(message);
            
            // Construct URL
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
            
            // Open in new tab
            window.open(whatsappUrl, '_blank');
        });
    });

    /* --- HEADER SCROLL EFFECT --- */
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});


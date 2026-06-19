// Navegación
const navLinks = document.querySelectorAll('.nav-menu a');
const contents = document.querySelectorAll('.content');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        link.classList.add('active');
        document.getElementById(link.getAttribute('data-section')).classList.add('active');
    });
});

// "Ver más sobre nosotros"
document.querySelectorAll('.ver-mas').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        contents.forEach(c => c.classList.remove('active'));
        document.getElementById('sobre-nosotros').classList.add('active');
    });
});

// Formulario
const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    messageDiv.style.color = '#ef4444';
    messageDiv.textContent = '❌ Error de envío. Inténtalo más tarde.';
    setTimeout(() => form.reset(), 2500);
});

// Animaciones
gsap.from("h1", { y: 80, opacity: 0, duration: 1.2 });
gsap.from(".subtitle", { y: 50, opacity: 0, duration: 1, delay: 0.4 });
gsap.from(".main-box", { y: 60, opacity: 0, duration: 1.2, delay: 0.8 });
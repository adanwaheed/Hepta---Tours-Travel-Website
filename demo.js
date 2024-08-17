document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const scrollDown = document.getElementById('scroll-down');
    const content = document.getElementById('content');

    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    scrollDown.addEventListener('click', function() {
        content.scrollIntoView({ behavior: 'smooth' });
    });
});

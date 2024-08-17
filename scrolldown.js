document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.getElementById('scroll-down');
    const content = document.getElementByclass('content');

    scrollDown.addEventListener('click', function() {
        content.scrollIntoView({ behavior: 'smooth' });
    });
});

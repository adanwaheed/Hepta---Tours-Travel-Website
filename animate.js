document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate');

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkElements() {
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkElements);
    window.addEventListener('resize', checkElements);

    // Initial check
    checkElements();
});

document.addEventListener('DOMContentLoaded', function () {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');

    text1.animate(
        [
            { transform: 'translateY(-50px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ],
        {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        }
    );

    text2.animate(
        [
            { transform: 'translateY(-50px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ],
        {
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards',
            delay: 500 
        }
    );
});


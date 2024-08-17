var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var images = document.querySelectorAll('img');
var currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        currentIndex = index;
        updateNumberText();
    });
});

var closeModal = document.getElementsByClassName("close")[0];
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

prev.onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    modalImg.src = images[currentIndex].src;
    updateNumberText();
}

next.onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = images[currentIndex].src;
    updateNumberText();
}

function updateNumberText() {
    var numberText = document.getElementsByClassName("numbertext")[0];
    numberText.innerHTML = (currentIndex + 1) + " / " + images.length;
}
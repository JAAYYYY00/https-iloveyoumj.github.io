function playYourUniverse() {
    var yourUniverseSong = document.getElementById("yourUniverse");
    text = "";

if (yourUniverseSong.paused) {
        yourUniverseSong.play();
        text = "Pause";
    } else {
        yourUniverseSong.pause();
text = "Play";  
    }
document.getElementById("buttonPlayer1").innerHTML = text;
}

function playIkawAtAko() {
    var ikawAtAkoSong = document.getElementById("ikawAtAko");
    text = "";

if (ikawAtAkoSong.paused) {
        ikawAtAkoSong.play();
 text = "Pause";
    } else {
        ikawAtAkoSong.pause();
text = "Play";  
    }
document.getElementById("buttonPlayer2").innerHTML = text;
}

function playBawatPiyesa() {
    var bawatPiyesaSong = document.getElementById("bawatPiyesa");
    text = "";

    if (bawatPiyesaSong.paused) {
        bawatPiyesaSong.play();
 text = "Pause";
    } else {
        bawatPiyesaSong.pause();
text = "Play";  
    }
document.getElementById("buttonPlayer3").innerHTML = text;
}

const input = document.getElementById('verificationInput'); 
input.addEventListener('input', () => {
  if (input.value === '04/03/24') { // Your "correct" digits
    window.location.replace('letter.html'); // Using .replace() prevents the user from going back to the login page
  }
    
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);

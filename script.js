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

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}

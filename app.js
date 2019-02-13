// Play drum by keyboard press
var clap = document.getElementById("drumClap");
var hihat = document.getElementById("drumHihat");
var kick = document.getElementById("drumKick");
var openhat = document.getElementById("drumOpenhat");
var boom = document.getElementById("drumBoom");
var ride = document.getElementById("drumRide");
var snare = document.getElementById("drumSnare");
var tom = document.getElementById("drumTom");
var tink = document.getElementById("drumTink");

document.addEventListener('keypress', () => {
     if (event.key == "a") {
        clap.play();
    } else if (event.key == "s") {
        hihat.play();
    } else if (event.key == "d") {
        kick.play();
    } else if (event.key == "f") {
        openhat.play();
    } else if (event.key == "g") {
        boom.play();
    } else if (event.key == "h") {
        ride.play();
    } else if (event.key == "j") {
        snare.play();
    } else if (event.key == "k") {
        tom.play();
    } else if (event.key == "l") {
        tink.play();
    }
});


// Play music by mouse click
function myDrumsound(sound) {
    var clap2 = document.getElementById(sound);
    clap2.play();
    var hihat2 = document.getElementById(sound);
    hihat2.play();
    var kick2 = document.getElementById(sound);
    kick2.play();
    var openhat2 = document.getElementById(sound);
    openhat2.play();
    var boom2 = document.getElementById(sound);
    boom2.play();
    var ride2 = document.getElementById(sound);
    ride2.play();
    var snare2 = document.getElementById(sound);
    snare2.play();
    var tom2 = document.getElementById(sound);
    tom2.play();
    var tink2 = document.getElementById(sound);
    tink2.play();
}
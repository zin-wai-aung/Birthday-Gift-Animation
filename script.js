let isBoxOpened = false; // if the box is already opened
const box = document.querySelector(".box");

box.addEventListener("click", function () {
  if (!isBoxOpened) {
    const lid = document.querySelector(".lid");
    const happyBalloon = document.querySelector(".happy-balloon");
    const balloons = document.getElementById("balloons");
    const explosionSound = document.getElementById("explosion-sound");
    const birthdayMusic = document.getElementById("birthday-music");

    // Add the shake animation to the box
    box.classList.add("shake");

    //  remove the shake and open the lid
    setTimeout(() => {
      box.classList.remove("shake");
      lid.style.transform = "rotate(-110deg)";

      setTimeout(() => {
        confettiExplosion();
        explosionSound.play(); // Play explosion sound
      }, 600);

      setTimeout(() => {
        happyBalloon.classList.add("fly");
      }, 700);

      setTimeout(() => {
        balloons.style.display = "block";
        birthdayMusic.play(); // Play birthday music
      }, 800);

      isBoxOpened = true; // Prevent multiple shakes or lid opening
    }, 500);
  }
});

// Function to trigger confetti explosion
function confettiExplosion() {
  confetti({
    particleCount: 500,
    spread: 120,
    origin: { y: 0.7 }, // Adjust where confetti starts from
  });
}

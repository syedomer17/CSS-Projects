const profession = document.getElementById("profession");
const profList = [
  "Web Developer",
  "Software Developer",
  "MERN Developer",
  "Python",
];
let currentIndex = 0;

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function toggleMenu() {
  const navlinks = document.getElementById("navLinks"); // Corrected ID
  navlinks.classList.toggle("active");
});

function changeProfession() {
  profession.style.opacity = 0;

  setTimeout(() => {
    profession.textContent = profList[currentIndex];
    profession.style.opacity = 1;
    currentIndex = (currentIndex + 1) % profList.length;
  }, 500);
}

profession.textContent = profList[currentIndex];
setTimeout(() => {
  profession.style.opacity = 1;
}, 100); // Delayed opacity for smooth appearance

setInterval(changeProfession, 3000);

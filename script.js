// ======== Navbar Scroll Effect ========
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#06061e";
    navbar.style.transition = "0.3s";
  } else {
    navbar.style.background = "#0b0b2c";
  }
});

// ======== Smooth Scroll for Navigation ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ======== Button Hover Animation ========
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});

let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 25) {
    header.classList.add('fixed-header');
    header.classList.add('gradient-bg');
  } else {
    header.classList.remove('fixed-header');
    header.classList.remove('gradient-bg');
  }
});

const hamburguer = document.querySelector('.hamburger');
const navMenu = document.querySelector('.list-menu');
const links = document.querySelectorAll('.list-menu, a');


hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener("click", () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

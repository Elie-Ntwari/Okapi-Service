window.addEventListener('scroll', () => {
  const logo = document.querySelector('.nav__logo img');
  const navbar = document.querySelector('.nav__bar');
  if (window.scrollY > 105) {
    logo.style.width = '80px'; // Réduit la taille du logo
    navbar.style.padding = '0.25rem 2rem';
  } else {
    logo.style.width = '120px'; // Rétablit la taille d'origine
    navbar.style.padding = '1rem 2rem'
  }
});

// Gestion du menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.nav__links');
  const hamburger = document.createElement('div');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = `
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  `;
  document.querySelector('.nav__bar').appendChild(hamburger);

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Fermer le menu quand on clique sur un lien
  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});

document.querySelectorAll(".question__box").forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
    let content = box.querySelector(".content");
    if (box.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0px";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section__container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => observer.observe(section));
});
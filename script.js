// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('.main-nav a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

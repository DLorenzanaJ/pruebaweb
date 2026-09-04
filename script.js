// Menú móvil
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Año dinámico en el footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Validación simple del formulario de contacto
const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

if (form && formNote) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formNote.textContent = 'Completa todos los campos antes de enviar.';
      formNote.style.color = '#E8A33D';
      return;
    }

    formNote.textContent = 'Mensaje listo para enviar. Conecta este formulario a tu servicio de correo o backend preferido.';
    formNote.style.color = '#5FB4C4';
    form.reset();
  });
}

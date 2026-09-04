# pruebaweb

Portafolio personal estático (HTML, CSS y JavaScript) listo para desplegarse en GitHub Pages.

## Archivos

- `index.html` — página principal (inicio, video de presentación, proyectos y contacto)
- `style.css` — estilos del sitio
- `script.js` — menú móvil, año dinámico del footer y validación del formulario de contacto
- `profile.svg` — ilustración usada en la sección de inicio

## Cómo desplegarlo en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `pruebaweb`, e inicialízalo con un README.
2. Clónalo en tu máquina:
   ```
   git clone https://github.com/tu-usuario/pruebaweb.git
   cd pruebaweb
   ```
3. Copia estos cuatro archivos (`index.html`, `style.css`, `script.js`, `profile.svg`) dentro de la carpeta del repositorio.
4. Sube los cambios:
   ```
   git config --global user.name "Tu Nombre"
   git config --global user.email "tuemail@ejemplo.com"
   git add .
   git commit -m "Primera versión de pruebaweb"
   git push origin main
   ```
5. En GitHub, ve a **Settings → Pages**, selecciona la rama `main` como fuente y guarda.
6. GitHub generará una URL como `https://tu-usuario.github.io/pruebaweb/`. Visítala para verificar que todo funcione.

## Personalización

- Cambia el nombre, textos y enlaces de contacto en `index.html` por los tuyos.
- El video incrustado usa el enlace que compartiste (`https://www.youtube.com/watch?v=lH9DhQv6nqo`).
- Los tres proyectos son contenido de ejemplo: reemplázalos por tus propios proyectos y enlaces a repositorios reales.

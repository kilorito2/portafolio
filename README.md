# Portafolio

Portafolio personal de una sola página, construido con React, TypeScript, Tailwind CSS v4 y Motion.

## Cómo editar el contenido

Todo el texto del sitio (nombre, rol, bio, proyectos, experiencia, educación, links) vive en un solo
archivo:

```
src/data/portfolio.ts
```

Los componentes en `src/components` solo leen ese archivo y lo muestran, así que para actualizar el
sitio normalmente basta con editar `portfolio.ts`. Todo lo que aparece entre `[corchetes]` es un
placeholder pensado para reemplazarse.

- **Foto de perfil**: coloca la imagen en `public/` (ej. `public/avatar.jpg`) y define
  `avatarUrl: '/avatar.jpg'` en `portfolio.ts`. Si se deja `undefined`, se muestra un monograma con
  tus iniciales.
- **CV**: coloca el PDF en `public/` (ej. `public/cv.pdf`) y define `resumeUrl: '/cv.pdf'`. Si se deja
  `undefined`, el botón de descarga no se muestra.
- **Capturas de proyectos**: colócalas en `public/projects/` y referencia la ruta en el campo `image`
  de cada proyecto. Sin imagen, la tarjeta muestra un número de índice en su lugar.
- **Secciones opcionales**: si `experience` o `education` quedan como arreglos vacíos (`[]`), esa
  parte de la sección "Trayectoria" se oculta sola (y si ambas quedan vacías, la sección completa
  desaparece, junto con su link en la navegación).

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:5173, con recarga en caliente
npm run build     # type-check + build de producción en dist/
npm run preview   # sirve el build de producción localmente
npm run lint       # oxlint
```

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (modo oscuro por clase, con toggle persistido)
- [Motion](https://motion.dev/) para las animaciones de entrada y scroll-reveal
- [Phosphor Icons](https://phosphoricons.com/)
- Fuentes autohospedadas vía `@fontsource` (Space Grotesk, Manrope, JetBrains Mono)

## Desplegar

Se publica solo en **GitHub Pages** en `https://kilorito2.github.io/`: cada `git push` a `main`
dispara el workflow en `.github/workflows/deploy.yml`, que compila el sitio y lo publica (ver
Settings → Pages → Source → "GitHub Actions" en el repo). Para desplegar un cambio, basta con:

```bash
git add -A
git commit -m "mensaje del cambio"
git push
```

y en 1-2 minutos queda en línea (podés seguirlo en la pestaña "Actions" del repo). Al ser un sitio
estático, también funcionaría igual de bien en [Vercel](https://vercel.com/) o
[Netlify](https://netlify.com/) si en algún momento preferís cambiar de hosting.

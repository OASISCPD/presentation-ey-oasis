# Presentación - OASIS Ey + App

Breve: Esta es una versión React/TypeScript de la presentación interactiva que originalmente estaba en `presentation.html`. Permite navegar slides, ver imágenes y descargar APKs vía enlace (Google Drive). Está pensada para demos y walkthroughs de la experiencia móvil.
Características principales
- Presentación basada en componentes React: `src/components/Presentation.tsx`, `SlideRenderer.tsx`, `NavigationControls.tsx`.
- Datos de las slides en `src/components/slidesData.ts` (27 slides, incluye flujo de conexión/ayuda con clase `slide-flow`).
- Recursos estáticos en `public/assets/` — Vite sirve estos como `/assets/` en producción.
- Descarga de APKs mediante enlace a Google Drive ( evitar subir binarios grandes al repo ).
- Responsive: adaptación a móviles (1-columna bajo 768px).

Stack técnico
- React + TypeScript
- Vite (dev server y build)
- Tailwind CSS + estilos CSS propios

Requisitos
- Node.js 18+ y npm (o pnpm/yarn si prefieres)

Instalación y desarrollo
Abre una terminal en la raíz del proyecto y ejecuta:

```powershell
npm install
npm run dev
```

Esto inicia el servidor de desarrollo (Vite). Abre el navegador en la URL que indique la consola.

Compilar para producción

```powershell
npm run build
npm run preview
```

Notas de despliegue
- Este proyecto está preparado para desplegar en Vercel. Vite servirá los ficheros estáticos desde `public/` (ej. `public/assets/` → `/assets/` en producción).
- Si el despliegue de Vercel requiere acceso público, en el panel del proyecto ve a Settings → Deployment Protection y cambia la visibilidad a Public.

APK y archivos grandes
- No subas APKs ni binarios grandes al repositorio: GitHub tiene límite de 100 MB. Usa Google Drive u otro hosting y enlaza desde la presentación.
- El repositorio incluye `.gitignore` con `*.apk` y `public/download/*.apk` para evitar commits accidentales.

Estructura relevante
- `src/components/Presentation.tsx` — Contenedor principal y lógica de navegación.
- `src/components/SlideRenderer.tsx` — Renderizado por tipo de slide.
- `src/components/slidesData.ts` — Array de objetos con contenido de cada slide.
- `src/components/Presentation.css` — Estilos globales y clases de slides (incluye `.slide-flow`).
- `vite.config.ts` — Configuración del dev server (mime-types, plugins).

Problemas comunes
- Imágenes no aparecen: asegúrate de mover tus archivos a `public/assets/` y usar rutas `/assets/tu-imagen.jpg`.
- Espacios en nombres de archivo: si subes imágenes desde WhatsApp u otras fuentes, renómalas (evita espacios) o usa `%20` en rutas.

Contribuir
- Haz fork o crea una rama, prueba en local y abre PR con descripción clara del cambio.

Commit y despliegue (rápido)
```powershell
git add .
git commit -m "Improve README and presentation styles"
git push origin main
```

Después del push Vercel desplegará automáticamente si el repo está conectado.

Contacto
- Si necesitas ayuda con el deploy o quieres que empuje y haga el merge, dime y lo hago.

License
- Añade tu licencia preferida si corresponde.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

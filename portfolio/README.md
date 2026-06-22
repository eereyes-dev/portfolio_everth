# Everth Reyes — Portfolio

Portfolio personal construido con **React + Vite + TypeScript**. (Siéntete libre de tomarlo como referencia)

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (bundler)
- **CSS Modules** (estilos por componente, sin dependencias externas)
- Fuentes: JetBrains Mono + Inter (Google Fonts)

## Features

- 🌙 Modo oscuro / ☀️ modo claro
- 🇨🇷 Español / 🇺🇸 Inglés
- Animación de escritura en el hero
- Diseño responsive (mobile-first)
- Sin librerías de UI externas

## Estructura

```
src/
├── components/       # Un .tsx + .module.css por sección
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── context/
│   └── AppContext.tsx  # Theme + Lang state global
├── data/
│   └── translations.ts # Todo el contenido ES/EN
├── hooks/
│   └── useTypingAnimation.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css          # Variables CSS globales + reset
```

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Despliegue

### Vercel (recomendado)
1. Push del repositorio a GitHub
2. Importar en [vercel.com](https://vercel.com) → seleccionar el repo
3. Vite se detecta automáticamente → Deploy

### Netlify
1. Push a GitHub
2. En Netlify: **New site → Import from Git**
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Agregar en `vite.config.ts`:
```ts
base: '/nombre-del-repo/'
```
Agregar en `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

## Personalización

### Agregar contenido
Editar **`src/data/translations.ts`** — toda la información del portfolio (proyectos, experiencia, habilidades) vive ahí, en ambos idiomas.

### Cambiar colores
Editar las variables CSS en **`src/index.css`** bajo `:root[data-theme='dark']` y `:root[data-theme='light']`.

### Agregar sección
1. Crear `src/components/NuevaSeccion.tsx` + `NuevaSeccion.module.css`
2. Agregar las traducciones correspondientes en `src/data/translations.ts` y los tipos en `src/types/index.ts`
3. Importar y usar en `src/App.tsx`

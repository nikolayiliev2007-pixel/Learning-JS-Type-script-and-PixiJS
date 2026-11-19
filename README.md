# Learning-JS-Type-script-and-PixiJS

A learning repo for JavaScript, TypeScript and [PixiJS](https://pixijs.com/).

## Projects

### idle-fighter

An idle fighting game in early development. Currently it renders a 960×540 PixiJS canvas (dark green background) that scales to fit the browser window.

**Tech stack:** PixiJS 8, TypeScript, Vite

**Getting started:**

```bash
cd idle-fighter
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```

**Structure:**

- `idle-fighter/src/main.ts` – app entry point, creates the PixiJS `Application`
- `idle-fighter/src/style.css` – fullscreen canvas styling
- `idle-fighter/index.html` – page shell

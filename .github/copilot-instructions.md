# Copilot Instructions

## Project layout

- The repository contains a single Vite application at `idle-fighter/`.
- `idle-fighter/index.html` is the browser entry document. It loads `src/main.ts` as an ES module.
- `idle-fighter/src/main.ts` creates and initializes the PixiJS `Application`; add the application canvas or scene objects there until the project grows into separate modules.
- `idle-fighter/src/style.css` owns the full-window canvas layout. The HTML's `#app` element is currently not used by the TypeScript entry point.
- Generated `dist/` and dependencies in `node_modules/` are ignored and should not be edited or committed.

## Build and run

Run commands from `idle-fighter/`:

```powershell
npm install
npm run dev
npm run build
npm run preview
```

- `npm run dev` starts the Vite development server.
- `npm run build` runs `tsc` and then `vite build`; use it as the repository's compile/check command.
- `npm run preview` serves the existing production build.
- There is currently no test runner or lint script. Do not invent `npm test`, `npm run lint`, or a single-test command until those tools are added.

## TypeScript and PixiJS conventions

- ES2023 is the configured TypeScript target, with bundler module resolution and no emitted JavaScript.
- The strictness checks in `tsconfig.json` include `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`; remove unused imports and declarations.
- Source modules use ES module imports and type-only syntax as needed for `verbatimModuleSyntax`.
- Top-level await is currently valid for PixiJS application initialization in `main.ts`.
- PixiJS v8 is used. Initialization is asynchronous: await `app.init(...)` before appending `app.canvas` or constructing further scene state.
- The fixed logical render size is currently 960 x 540 with a dark green background. Preserve or update the matching CSS sizing intentionally when changing viewport behavior.

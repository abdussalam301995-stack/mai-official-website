# MAI Official Website — Final Review

This package was reviewed from the original project archive.

## Key corrections
- Fixed the Tokenomics Community card root cause: its `community` modifier collided with the `.community` section selector. The allocation modifier is now `community-allocation`.
- Removed the late temporary Tokenomics mobile positioning patches that were masking the selector collision.
- Replaced the default Vite `index.css` rules that constrained `#root` and introduced unrelated light/dark theme colors.
- Added one final MAI design-system layer for consistent gold/orange, dark surfaces, typography, section backgrounds, RTL behavior, responsive safety, and reduced-motion accessibility.
- Normalized irregular whitespace in locale source files without changing their translated wording.
- Removed unused React imports reported by ESLint.

## Verification
- ESLint: PASS (0 errors, 0 warnings) for `src`.
- Locale modules: all EN/MM/AR/RU modules parse successfully.
- Production build could not be completed in the Linux review container because the uploaded Windows `node_modules` archive does not contain Rolldown's Linux native optional binding and network dependency installation timed out. This is an environment/dependency-binary issue, not a source lint error.

## Run on Windows
1. Extract the ZIP.
2. Open a terminal in the `mai-official-website` folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. For production verification, run `npm run build`.

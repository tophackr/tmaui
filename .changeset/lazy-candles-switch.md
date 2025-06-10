---
"tmaui": minor
---

Builder improvements.

**Updated:**
- Replace `Modal` background color to `secondary-bg-color`.
- Remove fixed colors from some components and replaced blurred glass background.
- Rename style file to `tmaui` (ex: `tmaui/tmaui.css`).
- Moved all icons to `tmaui/icons` package.
- Update `Segmented` component style.

**Fixed:**
- Update `Section` border style.
- Remove required type from `Cell.Info`.
- Remove fixed `NavigationCell` size.
- Add inherit color to `NavigationCell`.
- Add `safe-area-inset-bottom` from Telegram Viewport for `Modal` and `FixedLayout` padding.

**Minor improvements:**
- Migrate from `jest` to `vitest`.
- Migrate from `webpack`, `swc` to `vite` builder.

**Documentation:**
- Add `bun` installation to `README.md`.
- Add *how to use* to `Iconography`.
- Add other package managers installation to Welcome page.
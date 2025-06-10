# tmaui

## 2.2.2

### Patch Changes

- [`ff85526`](https://github.com/tophackr/tmaui/commit/ff855264b8aab9e8d19179cbaa9216dd222ef0b2) Thanks [@tophackr](https://github.com/tophackr)! - return back border width for media min-resolution

## 2.2.1

### Patch Changes

- [`c0ff295`](https://github.com/tophackr/tmaui/commit/c0ff295875927a6f02aea4dbf256d08dc130ce8d) Thanks [@tophackr](https://github.com/tophackr)! - reexport sub component props

## 2.2.0

### Minor Changes

- [#9](https://github.com/tophackr/tmaui/pull/9) [`0d87010`](https://github.com/tophackr/tmaui/commit/0d87010203b6b8010b68fff7db0c08e092bda829) Thanks [@tophackr](https://github.com/tophackr)! - Builder improvements.

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
  - Add _how to use_ to `Iconography`.
  - Add other package managers installation to Welcome page.

## 2.1.11

### Patch Changes

- [#5](https://github.com/tophackr/tmaui/pull/5) [`7a55b26`](https://github.com/tophackr/tmaui/commit/7a55b26ab52fe984b700894ee9bd05cbf270fc9d) Thanks [@tophackr](https://github.com/tophackr)! - New components, icons and minor improvements

  **Added:**

  - Icon Pack and [Iconography page](https://tophackr.com/tmaui/?path=/docs/iconography--documentation).
  - Separator color to divider from `tg-theme`.
  - Platformed color to `IconContainer`.
  - `NavigationCell` for navigation links.
  - `Info`, `Navigation` to `Cell` subcomponents.
  - Ref to `Tabbar` and `FixedLayout` ([#91](https://github.com/Telegram-Mini-Apps/TelegramUI/issues/91)).

  **Updated:**

  - `Navigation` for base platform according to the telegram design.

  **Fixed:**

  - UI icon size.
  - Section border style ([#94](https://github.com/Telegram-Mini-Apps/TelegramUI/issues/94)).
  - Cell box shadow ([#97](https://github.com/Telegram-Mini-Apps/TelegramUI/pull/97)).
  - Return back `forwardRef` for components with ref.

  <details>
      <summary>Why forwardRef?</summary>
      Although forwardRef is specified as [deprecated](https://react.dev/reference/react/forwardRef) it works as it should, by deleting it, some visual bugs were received, so it was returned back.
  </details>

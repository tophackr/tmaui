# tmaui

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

/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface FireFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function FireFill28({ size = 28, color = 'currentColor', ...props }: FireFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} d="M13.522 25q-2.41 0-4.21-.864-1.79-.865-2.788-2.421-.996-1.556-.997-3.642 0-1.098.173-1.952a11 11 0 0 1 .438-1.536q.264-.692.529-1.302.264-.61.437-1.21t.173-1.282q0-.336-.04-.732a9 9 0 0 1-.031-.6q0-.336.193-.55a.65.65 0 0 1 .508-.213q.54 0 1.089.325.56.326.997.905.447.57.681 1.323l-.508.101q.243-.426.305-.752.07-.336.07-.682a5.2 5.2 0 0 0-.376-1.912 8.6 8.6 0 0 0-.915-1.719A19 19 0 0 0 8.1 4.75a1.4 1.4 0 0 1-.243-.376 1 1 0 0 1-.082-.386q0-.489.417-.733Q8.62 3 9.342 3q1.342 0 2.827.325 1.495.316 2.96.997 1.474.671 2.797 1.72a11.8 11.8 0 0 1 2.34 2.47q1.026 1.425 1.617 3.266.59 1.84.59 4.119 0 2.045-.641 3.722a8.05 8.05 0 0 1-1.82 2.879 8.2 8.2 0 0 1-2.839 1.851Q15.536 25 13.522 25m.234-2.858q1.21 0 2.004-.529a3.27 3.27 0 0 0 1.2-1.393q.396-.865.396-1.872 0-.996-.386-2.004a6 6 0 0 0-1.13-1.86 5.7 5.7 0 0 0-1.87-1.384q-.072-.03-.112.01-.042.03-.03.102.131 1.25-.042 2.329-.172 1.068-.58 1.617a6 6 0 0 0-.437-.814 3 3 0 0 0-.59-.701q-.051-.04-.101-.02-.04.01-.051.08-.06.438-.285.804-.224.355-.488.753-.264.387-.468.874-.193.479-.193 1.15 0 1.281.864 2.075.875.783 2.299.783"/></svg>
  );
}

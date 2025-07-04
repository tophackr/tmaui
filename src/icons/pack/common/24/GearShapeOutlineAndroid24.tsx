/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface GearShapeOutlineAndroid24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function GearShapeOutlineAndroid24({ size = 24, color = 'currentColor', ...props }: GearShapeOutlineAndroid24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M12 8.082a3.918 3.918 0 1 0 0 7.836 3.918 3.918 0 0 0 0-7.836M9.482 12a2.518 2.518 0 1 1 5.036 0 2.518 2.518 0 0 1-5.036 0" clip-rule="evenodd"/><path fill={color} fill-rule="evenodd" d="M10.777 1.5A1.7 1.7 0 0 0 9.13 2.78l-.517 2.026q-.605.286-1.148.664L5.45 4.904a1.7 1.7 0 0 0-1.932.787L2.295 7.809a1.7 1.7 0 0 0 .285 2.067l1.497 1.461a8 8 0 0 0 0 1.326L2.58 14.124a1.7 1.7 0 0 0-.285 2.067l1.223 2.118a1.7 1.7 0 0 0 1.932.787l2.014-.566q.544.378 1.149.664l.517 2.026a1.7 1.7 0 0 0 1.647 1.28h2.446a1.7 1.7 0 0 0 1.647-1.28l.517-2.026a8 8 0 0 0 1.148-.664l2.015.566a1.7 1.7 0 0 0 1.932-.787l1.223-2.118a1.7 1.7 0 0 0-.285-2.067l-1.497-1.462a8 8 0 0 0 0-1.325l1.497-1.461a1.7 1.7 0 0 0 .285-2.067l-1.223-2.118a1.7 1.7 0 0 0-1.932-.787l-2.015.566a8 8 0 0 0-1.148-.664L14.87 2.78a1.7 1.7 0 0 0-1.647-1.28zm-.29 1.626a.3.3 0 0 1 .29-.226h2.446a.3.3 0 0 1 .29.226l.583 2.282c.066.26.25.469.49.572.475.204.922.464 1.333.771a.85.85 0 0 0 .74.138l2.27-.637a.3.3 0 0 1 .34.139l1.223 2.118a.3.3 0 0 1-.05.365l-1.686 1.646a.85.85 0 0 0-.25.709 6.6 6.6 0 0 1 0 1.542.85.85 0 0 0 .25.709l1.686 1.646a.3.3 0 0 1 .05.365l-1.223 2.118a.3.3 0 0 1-.34.139l-2.27-.637a.85.85 0 0 0-.74.138c-.41.307-.858.567-1.334.771a.85.85 0 0 0-.489.572l-.582 2.282a.3.3 0 0 1-.29.226h-2.447a.3.3 0 0 1-.29-.226l-.583-2.282a.85.85 0 0 0-.49-.572 6.5 6.5 0 0 1-1.333-.771.85.85 0 0 0-.74-.138l-2.27.637a.3.3 0 0 1-.34-.139l-1.223-2.118a.3.3 0 0 1 .05-.365l1.686-1.646a.85.85 0 0 0 .25-.709 6.6 6.6 0 0 1 0-1.542.85.85 0 0 0-.25-.709L3.558 8.874a.3.3 0 0 1-.05-.365L4.73 6.391a.3.3 0 0 1 .34-.14l2.27.638a.85.85 0 0 0 .74-.138c.41-.307.858-.567 1.334-.771a.85.85 0 0 0 .49-.572z" clip-rule="evenodd"/></svg>
  );
}

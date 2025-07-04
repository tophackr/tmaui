/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface PersonHanshakeFill28Props extends SvgAttributes {
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

export function PersonHanshakeFill28({ size = 28, color = 'currentColor', ...props }: PersonHanshakeFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M21.351 3.5c2.185 0 3.676 1.643 3.676 3.675 0 1.895-1.296 3.454-3.25 3.648q-.212.03-.426.027c-2.184 0-3.675-1.644-3.675-3.675q0-.354.065-.7c.3-1.695 1.685-2.976 3.61-2.976m5.622 20.847a.53.53 0 0 0 .154-.371v-.017c0-2.103 0-12.739-5.058-12.313-1.815.158-2.398 1.19-2.812 2.46-.08.242-.152.492-.226.746-.314 1.082-.648 2.235-1.575 3.105l-.142.126a6 6 0 0 1-.588.41q-.103.07-.215.126l-.074.037-.042.02a5.2 5.2 0 0 1-1.853.552H14.5c-.163.02-.331.02-.494.02s-.33-.005-.488-.02a10 10 0 0 0-.042 1.072.265.265 0 0 0 .266.275h.779a.26.26 0 0 1 .262.273 15 15 0 0 0 0 1.526q.105-.006.2-.02c.215-.022.425-.058.63-.095l.176-.039.133-.03q.097-.02.19-.046l.042-.011a8 8 0 0 0 .754-.236l.063-.024c.102-.038.2-.074.304-.123l.133-.062q.122-.053.24-.114.567-.27 1.087-.624.099.696.09 1.4c0 .448-.025 1.148-.058 1.673a.45.45 0 0 0 .448.478h7.387a.52.52 0 0 0 .37-.154" clip-rule="evenodd" opacity=".4"/><path fill={color} fill-rule="evenodd" d="M6.65 3.5c-2.182 0-3.675 1.643-3.675 3.675 0 1.895 1.299 3.454 3.25 3.648q.212.03.425.027c2.185 0 3.676-1.644 3.676-3.675q.001-.354-.062-.7C9.967 4.78 8.576 3.499 6.65 3.499m7.927 18.881q.105 0 .21-.015l.001-.006a15 15 0 0 1 0-1.524.26.26 0 0 0-.262-.275h-.786a.264.264 0 0 1-.264-.26q-.005-.535.045-1.068a5.2 5.2 0 0 1-1.979-.592 2.4 2.4 0 0 1-.316-.177q-.084-.05-.162-.106a3 3 0 0 1-.273-.195c-1.111-.887-1.476-2.138-1.816-3.308a23 23 0 0 0-.238-.783c-.403-1.253-.993-2.275-2.8-2.428C.874 11.22.874 21.844.874 23.956v.02a.525.525 0 0 0 .525.525h7.384a.46.46 0 0 0 .46-.497 30 30 0 0 1-.056-1.658 9 9 0 0 1 .09-1.4q.125.097.257.175l.088.053q.09.052.174.105.126.077.268.147.155.09.32.163.099.046.198.089.081.035.152.068.103.047.208.087l.109.043q.346.146.71.237l.336.08a8 8 0 0 0 .94.163c.063.01.132.02.2.02h.121l.078.006q.087.009.179.01h.009c.126.01.252.01.383.01q.099 0 .195-.005.095-.005.188-.005h.01q.052 0 .097-.006z" clip-rule="evenodd"/></svg>
  );
}

/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface GearShapeOutlineIOS24Props extends SvgAttributes {
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

export function GearShapeOutlineIOS24({ size = 24, color = 'currentColor', ...props }: GearShapeOutlineIOS24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M12 8.082a3.918 3.918 0 1 0 0 7.836 3.918 3.918 0 0 0 0-7.836M9.482 12a2.518 2.518 0 1 1 5.036 0 2.518 2.518 0 0 1-5.036 0" clip-rule="evenodd"/><path fill={color} fill-rule="evenodd" d="M10.801 1.5c-.664 0-1.242.452-1.403 1.096l-.426 1.703a8 8 0 0 0-.276.115L7.19 3.51a1.45 1.45 0 0 0-1.767.218L3.728 5.423c-.47.47-.56 1.198-.218 1.767l.904 1.506q-.06.136-.115.276l-1.703.426A1.45 1.45 0 0 0 1.5 10.8v2.4c0 .664.452 1.242 1.096 1.403l1.703.426q.055.14.115.276L3.51 16.81a1.45 1.45 0 0 0 .218 1.767l1.695 1.695c.47.47 1.198.56 1.767.218l1.506-.904q.136.06.276.115l.426 1.703c.16.644.74 1.096 1.403 1.096H13.2c.664 0 1.242-.452 1.403-1.096l.426-1.703q.14-.055.276-.115l1.506.904a1.446 1.446 0 0 0 1.767-.218l1.695-1.695c.47-.47.56-1.198.218-1.767l-.904-1.506q.06-.136.115-.276l1.703-.426A1.45 1.45 0 0 0 22.5 13.2v-2.4c0-.664-.452-1.242-1.096-1.403l-1.703-.426a8 8 0 0 0-.115-.276l.904-1.506a1.45 1.45 0 0 0-.218-1.767l-1.695-1.695a1.45 1.45 0 0 0-1.767-.218l-1.506.904a8 8 0 0 0-.276-.115l-.426-1.703A1.45 1.45 0 0 0 13.2 1.5zm-.045 1.435A.05.05 0 0 1 10.8 2.9h2.4c.021 0 .04.015.045.035l.485 1.94c.078.31.305.55.594.654q.312.113.61.253a.94.94 0 0 0 .882-.043l1.715-1.028a.05.05 0 0 1 .057.007l1.695 1.695a.05.05 0 0 1 .007.057l-1.028 1.715a.94.94 0 0 0-.043.883q.14.297.253.61a.94.94 0 0 0 .654.593l1.94.485c.02.005.035.024.035.045V13.2c0 .021-.015.04-.035.045l-1.94.485a.94.94 0 0 0-.654.594q-.113.312-.253.61a.94.94 0 0 0 .043.882l1.028 1.715a.05.05 0 0 1-.007.057l-1.695 1.695a.05.05 0 0 1-.057.007l-1.715-1.028a.94.94 0 0 0-.883-.043 7 7 0 0 1-.61.253.94.94 0 0 0-.593.654l-.485 1.94a.05.05 0 0 1-.045.035h-2.4a.05.05 0 0 1-.045-.035l-.485-1.94a.94.94 0 0 0-.594-.654 7 7 0 0 1-.61-.253.94.94 0 0 0-.882.043L6.47 19.289a.05.05 0 0 1-.057-.007l-1.695-1.695a.05.05 0 0 1-.007-.057l1.028-1.715a.94.94 0 0 0 .043-.883 7 7 0 0 1-.253-.61.94.94 0 0 0-.654-.593l-1.94-.485A.05.05 0 0 1 2.9 13.2v-2.4c0-.021.015-.04.035-.045l1.94-.485a.94.94 0 0 0 .654-.594q.113-.312.253-.61a.94.94 0 0 0-.043-.882L4.711 6.47a.05.05 0 0 1 .007-.057l1.695-1.695a.05.05 0 0 1 .057-.007l1.715 1.028a.94.94 0 0 0 .883.043q.297-.14.61-.253a.94.94 0 0 0 .593-.654z" clip-rule="evenodd"/></svg>
  );
}

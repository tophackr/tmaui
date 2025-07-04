/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface TONDomainsLogo28Props extends SvgAttributes {
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

export function TONDomainsLogo28({ size = 28, color = 'currentColor', ...props }: TONDomainsLogo28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M1.457 8.704C1 9.807 1 11.204 1 14s0 4.194.457 5.296a6 6 0 0 0 3.247 3.247C5.807 23 7.204 23 10 23h8c2.796 0 4.194 0 5.296-.457a6 6 0 0 0 3.247-3.247C27 18.194 27 16.796 27 14s0-4.193-.457-5.296a6 6 0 0 0-3.247-3.247C22.194 5 20.796 5 18 5h-8c-2.796 0-4.193 0-5.296.457a6 6 0 0 0-3.247 3.247m5.363 4.054v3.387c0 1.107.58 1.675 1.723 1.675H8.6c.72 0 1.213-.258 1.213-.761 0-.399-.228-.575-.65-.622l-.112-.011c-.369-.03-.521-.217-.521-.662v-3.006h.603c.405 0 .657-.252.657-.645 0-.392-.252-.644-.657-.644H8.53v-.697c0-.551-.322-.891-.856-.891-.533 0-.855.34-.855.89v.698h-.328c-.404 0-.662.246-.662.644 0 .399.258.645.662.645zm-3.265 4.119a.94.94 0 0 0 .944.943.943.943 0 1 0 0-1.886.935.935 0 0 0-.944.943m10.063 1.008c-1.899 0-3.112-1.219-3.112-3.282 0-2.033 1.23-3.269 3.112-3.269 1.88 0 3.11 1.23 3.11 3.27 0 2.068-1.212 3.28-3.11 3.28m0-1.307c.838 0 1.37-.709 1.37-1.969 0-1.248-.538-1.968-1.37-1.968s-1.377.72-1.377 1.968c0 1.26.533 1.97 1.377 1.97m4.196.404c0 .586.357.891.855.891.504 0 .856-.305.856-.89v-2.837c0-.814.486-1.376 1.254-1.376.767 0 1.154.468 1.154 1.289v2.923c0 .586.351.891.855.891.498 0 .856-.305.856-.89V13.7c0-1.47-.785-2.35-2.18-2.35-.967 0-1.6.428-1.933 1.208h-.036v-.352c0-.539-.34-.867-.855-.867-.516 0-.826.328-.826.861z" clip-rule="evenodd"/></svg>
  );
}

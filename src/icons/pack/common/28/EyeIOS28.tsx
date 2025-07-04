/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface EyeIOS28Props extends SvgAttributes {
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

export function EyeIOS28({ size = 28, color = 'currentColor', ...props }: EyeIOS28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M3.882 14.614c-.18-.24-.326-.45-.436-.614.11-.164.256-.373.436-.614.469-.625 1.17-1.46 2.092-2.292C7.822 9.424 10.514 7.8 14 7.8s6.178 1.624 8.026 3.294a16.3 16.3 0 0 1 2.092 2.292c.18.24.326.45.436.614-.11.164-.256.373-.436.614a16.3 16.3 0 0 1-2.092 2.292C20.178 18.576 17.486 20.2 14 20.2s-6.178-1.624-8.026-3.294a16.3 16.3 0 0 1-2.092-2.292m22.312-1.012L25.5 14c.695.397.694.397.694.398l-.002.002-.003.006-.011.02-.016.027-.025.04q-.053.088-.152.243c-.133.205-.329.493-.587.838a18 18 0 0 1-2.3 2.52C21.073 19.924 18.015 21.8 14 21.8s-7.072-1.876-9.099-3.706a18 18 0 0 1-2.299-2.52 15 15 0 0 1-.74-1.08l-.04-.068-.011-.02-.004-.006v-.002h-.001L2.5 14l-.694-.398.001-.002.004-.006.011-.02.04-.068.153-.242c.133-.205.329-.493.587-.838a18 18 0 0 1 2.3-2.52C6.927 8.076 9.985 6.2 14 6.2s7.072 1.876 9.099 3.706a18 18 0 0 1 2.299 2.52 15 15 0 0 1 .739 1.08l.04.068.012.02.003.006zM25.5 14l.695-.397a.8.8 0 0 1 0 .794zm-23.695-.397L2.5 14l-.695.397a.8.8 0 0 1 0-.794M18.5 14a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-3 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/></svg>
  );
}

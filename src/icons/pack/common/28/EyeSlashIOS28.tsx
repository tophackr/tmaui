/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface EyeSlashIOS28Props extends SvgAttributes {
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

export function EyeSlashIOS28({ size = 28, color = 'currentColor', ...props }: EyeSlashIOS28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M7.087 5.913a.83.83 0 0 0-1.174 1.174l15 15a.83.83 0 0 0 1.174-1.174zm-.991 3.011c-.431.322-.83.653-1.195.982a18 18 0 0 0-2.299 2.52 15 15 0 0 0-.74 1.08l-.04.068-.011.02-.004.006v.002h-.001L2.5 14l-.695-.397a.8.8 0 0 0 0 .794L2.5 14c-.695.397-.694.397-.694.398l.001.002.004.006.011.02.04.068.153.242c.133.205.329.493.587.838a18 18 0 0 0 2.3 2.52C6.927 19.924 9.985 21.8 14 21.8a12.5 12.5 0 0 0 4.236-.735l-1.272-1.273c-.913.257-1.902.408-2.964.408-3.486 0-6.178-1.624-8.026-3.294a16.3 16.3 0 0 1-2.092-2.292c-.18-.24-.326-.45-.436-.614.11-.164.256-.373.436-.614.469-.625 1.17-1.46 2.092-2.292.385-.349.808-.695 1.266-1.025zm14.664 9.007c.458-.33.88-.676 1.266-1.025a16.3 16.3 0 0 0 2.092-2.292c.18-.24.326-.45.436-.614-.11-.164-.256-.373-.436-.614a16.3 16.3 0 0 0-2.092-2.292C20.178 9.424 17.486 7.8 14 7.8c-1.062 0-2.05.15-2.964.408L9.763 6.935A12.5 12.5 0 0 1 14 6.2c4.014 0 7.072 1.876 9.099 3.706a18 18 0 0 1 2.299 2.52 15 15 0 0 1 .739 1.08l.04.068.012.02.003.006.002.002L25.5 14c.695.397.694.397.694.398l-.002.002-.003.006-.011.02-.041.068q-.053.087-.152.242c-.133.205-.329.493-.587.838a18 18 0 0 1-2.3 2.52c-.364.33-.763.66-1.194.982zM25.5 14l.695-.397a.8.8 0 0 1 0 .794zM9.734 12.563a4.5 4.5 0 0 0 5.703 5.703zm8.532 2.874a4.5 4.5 0 0 0-5.703-5.703z" clip-rule="evenodd"/></svg>
  );
}

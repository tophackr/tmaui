/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface MessageElipsisOutline28Props extends SvgAttributes {
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

export function MessageElipsisOutline28({ size = 28, color = 'currentColor', ...props }: MessageElipsisOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M4.8 13.091c0-4.508 4.045-8.29 9.2-8.29 2.613 0 4.96.98 6.626 2.54 1.604 1.501 2.574 3.53 2.574 5.75 0 4.51-4.046 8.291-9.2 8.291q-.37 0-.73-.025l-.021-.002a10 10 0 0 1-1.524-.228 1 1 0 0 0-.417-.006l-6.303-6.242A7.7 7.7 0 0 1 4.8 13.09m.206 1.793-.001-.005L3.2 13.09C3.2 7.558 8.109 3.2 14 3.2c3.014 0 5.752 1.131 7.72 2.972 1.895 1.774 3.08 4.213 3.08 6.918 0 5.533-4.909 9.891-10.8 9.891q-.426 0-.843-.03l-1.85-1.831-.015.003zm6.628 7.86q.732.15 1.499.207l-1.84-1.827a1.3 1.3 0 0 0-.456.208c-.141.099-.29.236-.41.348l-.023.02.543.588-.543-.587a7.5 7.5 0 0 1-1.529 1.14 3.2 3.2 0 0 1-.94.322 6 6 0 0 0 .259-.366 3.3 3.3 0 0 0 .526-1.966 3 3 0 0 0-.153-.808c-.073-.204-.212-.504-.48-.7-1.587-1.161-2.656-2.659-3.081-4.439L3.2 13.091c0 3.11 1.448 5.663 3.857 7.46l.003.01c.027.075.054.196.062.35.016.31-.052.68-.268 1.012a6.4 6.4 0 0 1-.7.861l-.007.008a9 9 0 0 0-.228.253c-.068.08-.16.194-.23.326a.98.98 0 0 0-.089.74.96.96 0 0 0 .562.606c.124.052.252.076.336.089q.149.022.323.032c.23.012.51.009.815-.019.596-.054 1.355-.21 2.022-.583.917-.515 1.477-1.033 1.83-1.358l.002-.002zm0 0-.267-.058c.135.031.25.01.318-.013a.4.4 0 0 0 .072-.032l-.002.001c-.013.01-.04.03-.089.073zM7.04 20.515a.4.4 0 0 0 .1.099l-.084-.062zm0 0-.005-.009v.001l.002.002zm-.324 2.705h.004zM14 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m-3.75-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M19 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"/></svg>
  );
}

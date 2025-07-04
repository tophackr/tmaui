/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Apps30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function Apps30({ size = 30, color = 'currentColor', ...props }: Apps30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill={color} rx="7"/><path fill="#fff" fill-rule="evenodd" d="M5.718 6.592C5.5 7.02 5.5 7.58 5.5 8.7v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108V8.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C11.98 5.5 11.42 5.5 10.3 5.5H8.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874m0 11C5.5 18.02 5.5 18.58 5.5 19.7v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-1.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874c-.428-.218-.988-.218-2.108-.218H8.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874M16.5 8.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C18.02 5.5 18.58 5.5 19.7 5.5h1.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108zm.818 13.921 1.06 1.061c.743.743 1.114 1.114 1.543 1.253.376.122.782.122 1.158 0 .428-.14.8-.51 1.542-1.253l1.061-1.06c.742-.743 1.114-1.114 1.253-1.543a1.88 1.88 0 0 0 0-1.158c-.14-.428-.51-.8-1.253-1.542l-1.06-1.06c-.743-.743-1.114-1.115-1.543-1.254a1.88 1.88 0 0 0-1.158 0c-.428.14-.8.51-1.542 1.253l-1.061 1.06c-.742.743-1.114 1.115-1.253 1.543a1.88 1.88 0 0 0 0 1.159c.14.428.51.799 1.253 1.541" clip-rule="evenodd"/></svg>
  );
}

/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface FaceID30Props extends SvgAttributes {
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

export function FaceID30({ size = 30, color = 'currentColor', ...props }: FaceID30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill={color} rx="7"/><path fill="#fff" fill-rule="evenodd" d="M9.7 5.67h-.033c-.532 0-.98 0-1.348.03-.385.031-.753.1-1.104.278a2.83 2.83 0 0 0-1.237 1.237c-.178.35-.247.719-.278 1.104-.03.367-.03.816-.03 1.348V11a.83.83 0 0 0 1.66 0V9.7c0-.574 0-.954.025-1.246.023-.282.063-.408.103-.485.112-.22.29-.4.51-.511.078-.04.204-.08.486-.104.292-.023.672-.024 1.246-.024H11a.83.83 0 1 0 0-1.66zm0 18.66h-.033c-.532 0-.98 0-1.348-.03-.385-.032-.753-.1-1.104-.279a2.83 2.83 0 0 1-1.237-1.236c-.178-.35-.247-.719-.278-1.104-.03-.367-.03-.816-.03-1.348V19a.83.83 0 0 1 1.66 0v1.3c0 .574 0 .954.025 1.246.023.282.063.408.103.485.112.22.29.4.51.512.078.039.204.08.486.102.292.024.672.025 1.246.025H11a.83.83 0 1 1 0 1.66zM20.333 5.67H19a.83.83 0 0 0 0 1.66h1.3c.574 0 .954 0 1.246.024.282.024.408.064.485.104.22.112.4.29.512.51.039.078.08.204.102.486.024.292.025.672.025 1.246V11a.83.83 0 1 0 1.66 0V9.667c0-.532 0-.98-.03-1.348-.031-.385-.1-.753-.278-1.104a2.83 2.83 0 0 0-1.237-1.237c-.35-.178-.719-.247-1.104-.278-.367-.03-.816-.03-1.348-.03M20.3 24.33h.033c.532 0 .98 0 1.348-.03.385-.032.753-.1 1.104-.279a2.83 2.83 0 0 0 1.237-1.236c.178-.35.247-.719.278-1.104.03-.367.03-.816.03-1.348V19a.83.83 0 1 0-1.66 0v1.3c0 .574 0 .954-.025 1.246-.023.282-.063.408-.102.485-.113.22-.292.4-.512.512-.077.039-.203.08-.485.102-.292.024-.672.025-1.246.025H19a.83.83 0 1 0 0 1.66zm-8.8-13.08a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75m8.25.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zm-4.25-.75a.75.75 0 0 1 .75.75v3.22c0 .122 0 .255-.01.37a1.3 1.3 0 0 1-.126.477 1.25 1.25 0 0 1-.546.547 1.3 1.3 0 0 1-.479.127c-.114.009-.247.009-.369.009h-.22a.75.75 0 0 1 0-1.5h.25V12a.75.75 0 0 1 .75-.75m-2.97 6.72a.75.75 0 1 0-1.06 1.06c.922.923 2.256 1.345 3.53 1.345s2.608-.422 3.53-1.345a.75.75 0 1 0-1.06-1.06c-.578.577-1.494.905-2.47.905s-1.892-.328-2.47-.905" clip-rule="evenodd"/></svg>
  );
}

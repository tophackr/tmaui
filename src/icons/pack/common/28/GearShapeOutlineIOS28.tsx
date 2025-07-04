/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface GearShapeOutlineIOS28Props extends SvgAttributes {
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

export function GearShapeOutlineIOS28({ size = 28, color = 'currentColor', ...props }: GearShapeOutlineIOS28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M14 9.802a4.198 4.198 0 1 0 0 8.396 4.198 4.198 0 0 0 0-8.396M11.302 14a2.698 2.698 0 1 1 5.396 0 2.698 2.698 0 0 1-5.396 0" clip-rule="evenodd"/><path fill={color} fill-rule="evenodd" d="M12.716 2.75a1.55 1.55 0 0 0-1.504 1.174l-.457 1.825q-.148.06-.295.123l-1.613-.968a1.55 1.55 0 0 0-1.894.233L5.137 6.953a1.55 1.55 0 0 0-.233 1.894l.968 1.613a9 9 0 0 0-.123.295l-1.825.457a1.55 1.55 0 0 0-1.174 1.504v2.569a1.55 1.55 0 0 0 1.174 1.503l1.825.456q.06.15.123.296l-.968 1.613a1.55 1.55 0 0 0 .233 1.894l1.816 1.816a1.55 1.55 0 0 0 1.894.233l1.613-.968q.147.064.295.123l.457 1.825a1.55 1.55 0 0 0 1.504 1.174h2.569a1.55 1.55 0 0 0 1.503-1.174l.456-1.825q.15-.06.296-.123l1.613.968c.61.366 1.39.27 1.894-.233l1.816-1.816a1.55 1.55 0 0 0 .233-1.894l-.968-1.613q.064-.147.123-.296l1.825-.456a1.55 1.55 0 0 0 1.174-1.504v-2.568a1.55 1.55 0 0 0-1.174-1.504l-1.825-.457q-.06-.148-.123-.295l.968-1.613a1.55 1.55 0 0 0-.233-1.894l-1.816-1.816a1.55 1.55 0 0 0-1.894-.233l-1.613.968a9 9 0 0 0-.296-.123l-.456-1.825a1.55 1.55 0 0 0-1.504-1.174zm-.049 1.538a.05.05 0 0 1 .049-.038h2.569a.05.05 0 0 1 .048.038l.52 2.078c.082.332.327.59.635.701q.334.12.654.271c.297.14.652.13.946-.046l1.837-1.102a.05.05 0 0 1 .061.007l1.816 1.817a.05.05 0 0 1 .008.061l-1.102 1.837a1 1 0 0 0-.046.946q.15.319.27.654c.112.308.37.553.702.636l2.078.519a.05.05 0 0 1 .038.049v2.569a.05.05 0 0 1-.038.048l-2.078.52c-.332.082-.59.327-.701.635q-.12.334-.271.654c-.14.297-.13.652.046.946l1.102 1.837a.05.05 0 0 1-.007.061l-1.817 1.817a.05.05 0 0 1-.061.007l-1.837-1.102a1 1 0 0 0-.946-.046q-.319.15-.654.27a1.01 1.01 0 0 0-.636.702l-.519 2.078a.05.05 0 0 1-.049.038h-2.568a.05.05 0 0 1-.049-.038l-.52-2.078a1 1 0 0 0-.635-.701q-.335-.12-.654-.271a1 1 0 0 0-.946.046L8.075 21.81a.05.05 0 0 1-.061-.008l-1.817-1.816a.05.05 0 0 1-.007-.061l1.102-1.837c.176-.294.186-.65.046-.946a7 7 0 0 1-.27-.654 1 1 0 0 0-.702-.636l-2.078-.519a.05.05 0 0 1-.038-.049v-2.568a.05.05 0 0 1 .038-.049l2.078-.52c.332-.082.59-.327.701-.635q.12-.335.271-.654c.14-.297.13-.652-.046-.946L6.19 8.075a.05.05 0 0 1 .007-.061l1.817-1.817a.05.05 0 0 1 .061-.007l1.837 1.102c.294.176.65.186.946.046q.319-.15.654-.27a1.01 1.01 0 0 0 .636-.702z" clip-rule="evenodd"/></svg>
  );
}

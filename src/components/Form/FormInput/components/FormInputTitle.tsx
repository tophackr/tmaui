'use client';

import { usePlatform } from 'hooks/usePlatform';

import { Caption } from 'components/Typography/Caption/Caption';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import type { TypographyProps } from 'components/Typography/Typography';

export type FormInputTitleProps = TypographyProps;

export const FormInputTitle = ({ ...restProps }: FormInputTitleProps) => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return (
      <Caption
        caps
        {...restProps}
      />
    );
  }

  return (
    <Subheadline
      level="2"
      weight="2"
      {...restProps}
    />
  );
};

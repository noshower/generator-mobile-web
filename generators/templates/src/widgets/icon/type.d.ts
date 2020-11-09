import { CSSProperties } from 'react';

export type Props = {
  type: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
};

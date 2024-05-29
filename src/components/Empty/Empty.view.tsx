import { ReactNode } from 'react';
import * as Styled from './Empty.styles';

type EmptyProps = {
  children: ReactNode;
};

export const EmptyView = ({
  children,
}: EmptyProps) => (<Styled.Empty>{children}</Styled.Empty>);

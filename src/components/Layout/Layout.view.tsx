import { ElementType, FunctionComponent, ReactNode } from 'react';
import * as Styled from './Layout.styles';

type LayoutProps = {
  header?: ElementType;
  children: ReactNode;
};

type ILayoutView = FunctionComponent<LayoutProps> & {
  Header: ElementType;
  Wrapper: ElementType;

  Heading: ElementType;
  Subheading: ElementType;
  Paragraph: ElementType;

  Section: ElementType;
};

const Header = ({ children }: { children: ReactNode }) => (
  <Styled.Header>{children}</Styled.Header>
);

export const LayoutView: ILayoutView = ({
  children,
  header,
  ...rest
}) => {
  const HeaderComponent = header;

  return (
    <Styled.Container {...rest}>
      {header && HeaderComponent && <HeaderComponent />}
      <Styled.Main>
        {children}
      </Styled.Main>
    </Styled.Container>
  );
};

LayoutView.Header = Header;
LayoutView.Wrapper = Styled.Wrapper;

LayoutView.Heading = Styled.Heading;
LayoutView.Subheading = Styled.Subheading;
LayoutView.Paragraph = Styled.Paragraph;

LayoutView.Section = Styled.Section;

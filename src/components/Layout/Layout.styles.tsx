import styled, { css } from 'styled-components';
import { THEME } from '../../definitions/constants';

export type SectionProps = {
  background?: string;
  isFluid?: boolean;
}

const containerStyles = css`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  padding: 2rem 0;
`;

export const Container = styled.div`
  ${containerStyles};
  color: ${THEME.palettes.main};
  text-align: left;
  line-height: 1.5;
  color: ${THEME.palettes.main};
  min-height: calc(100vh - ${THEME.constants.navBarHeightMedium});

  @media (max-width: ${THEME.media.small}) {
    min-height: calc(100vh - ${THEME.constants.navBarHeightSmall});
  }
`;

export const Main = styled.main`
  ${containerStyles};
  flex: 1;
  padding: 0;
`;

export const Header = styled.header`
  ${containerStyles};
  min-height: 10rem;
  gap: 1rem;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin: 0;

  @media (max-width: ${THEME.media.small}) {
    font-size: 2rem;
  }
`;

export const Subheading = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;

  @media (max-width: ${THEME.media.small}) {
    font-size: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;

  @media (max-width: ${THEME.media.small}) {
    font-size: 0.75rem;
  }
`;

export const Section = styled('section').withConfig({
  shouldForwardProp: (prop) =>
    !['isFluid'].includes(prop),
}) <SectionProps>`
  ${containerStyles};
  background: ${props => props.background || 'none'};
  justify-content: center;
  flex: ${props => props.isFluid ? '1' : '0'};
  gap: 1rem;
`;

export const Wrapper = styled.div`
  ${containerStyles};
  padding-top: ${THEME.constants.navBarHeightMedium};

  @media (max-width: ${THEME.media.small}) {
    padding-top: ${THEME.constants.navBarHeightSmall};
  }
`;


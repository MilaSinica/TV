import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from '../../definitions/constants';

const sharedItemStyled = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border: 0.3vw solid transparent;
  border-radius: 0.25rem;
  padding: 0.3vw;

  img {
    width: 20vw;
    height: auto;
  }

  @media (max-width: ${THEME.media.small}) {
    img {
      width: 70vw;
      height: auto;
    }
  }
`;

export const LinkItem = styled(Link).withConfig({
  shouldForwardProp: (prop) =>
    !['isSelected'].includes(prop),
}) <{ isSelected: boolean }>`
  ${sharedItemStyled}
  border-color: ${props => props.isSelected ? THEME.palettes.highlight : `transparent`};

  img {
    width: 20vw;
    height: auto;
  }

  @media (max-width: ${THEME.media.small}) {
    img {
      width: 70vw;
      height: auto;
    }
  }
`;

export const Item = styled.div`
  ${sharedItemStyled}
`;

export const LoadingItem = styled.div`
  ${sharedItemStyled}
  background: ${THEME.palettes.mute};
  width: 30vw;
  height: 30vw;

  @media (max-width: ${THEME.media.small}) {
    width: 130vw;
    height: 90vw;
  }
`;


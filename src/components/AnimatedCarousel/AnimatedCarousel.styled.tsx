import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from '../../definitions/constants';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin-left: 4vw;
`;

export const Track = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['translateX'].includes(prop),
}) <{ translateX: number }>`
  transition: transform 0.5s ease-in-out;
  transform: ${({ translateX }) => `translateX(-${(translateX * 22)}vw)`};
  display: flex;
  gap: 1vw;
`;

export const Item = styled(Link).withConfig({
  shouldForwardProp: (prop) =>
    !['isSelected'].includes(prop),
}) <{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border: 0.3vw solid transparent;
  border-color: ${props => props.isSelected ? THEME.palettes.highlight : `transparent`};
  border-radius: 0.25rem;
  padding: 0.3vw;

  img {
    width: 20vw;
    height: auto;
  }
`;


import styled from 'styled-components';
import { BackButton } from './Buttons';
import { Headline2 } from './Headlines';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flxe-direction: row;
  algin-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin-bottom: 2rem;
  ${BackButton}{
    position: absolute;
    top: 0;
    left: 0;
  }
  ${Headline2}{
    margin: 0 !important;
  }
`;
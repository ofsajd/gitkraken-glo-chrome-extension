import styled from 'styled-components';
import { Headline2 } from '../../../styles/common/Headlines';
import { Button } from '../../../styles/common/Buttons';

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: flex-start;
  justify-content: stretch;
  width: 100%;
  ${Headline2}{
    margin-bottom: 2rem;
  }
`;

export const ListItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: .5rem 1rem;
  cursor: pointer;
  margin: .25rem 0;
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.color.input_border_active};
  transition: all .2s ease-in-out; 
  &:hover{
    box-shadow: rgb(0, 229, 255) 0px 0px 10px;
  }
`;

export const ListItemLabel = styled.span`
  display: flex;
  font-size: 1rem;
  line-height: 2rem;
  color: ${props => props.theme.color.text};
`;

export const NewListItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
  ${Button}{
    margin-left: .5rem;
    margin-top: 0;
  }
`;

export const PopupBox = styled.div`
  width: 50%;
  position: fixed;
  top: 0;
  left: 25%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(-300px);'}
  transition: all .3s ease-in-out;
  background-color: ${props => props.theme.color.background};
  display: flex;
  box-shadow: #000 0 0 10px;
  z-index: 99999;
  ${Button}{
    margin-top: 1rem;
  }
`;
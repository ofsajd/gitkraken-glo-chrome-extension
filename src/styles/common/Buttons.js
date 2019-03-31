import styled from 'styled-components';
import backIcon from '../../images/arrow-back.svg';

export const Button = styled.button`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: .5rem 1rem;
  background-color: ${props => props.theme.color.button_background};
  color: ${props => props.theme.color.text};
  border: 1px solid ${props => props.theme.color.button_border};
  border-radius: 2px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  text-transform: uppercase;
  &:hover{
    background-color: ${props => props.theme.color.button_background_hover}
  }
`
export const BackButton = styled.button`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: .5rem 1rem;
  background-color: ${props => props.theme.color.back_button_background};
  color: ${props => props.theme.color.text};
  border: 1px solid ${props => props.theme.color.input_border};
  border-radius: 2px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  text-transform: uppercase;
  background-image: url(${backIcon});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  &:hover{
    background-color: ${props => props.theme.color.back_button_background_hover}
  }
`;
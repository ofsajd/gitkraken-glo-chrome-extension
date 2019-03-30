import styled from 'styled-components';

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
  &:hover{
    background-color: ${props => props.theme.color.button_background_hover}
  }
`
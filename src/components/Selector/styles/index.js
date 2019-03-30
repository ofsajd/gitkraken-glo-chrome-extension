import styled from 'styled-components';

export const SelectorBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const SelectorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .25rem .5rem;
  font-size: 1rem;
  line-height: 1rem;
  cursor: pointer;
  border-radius: 2px;
  margin: 0 .5rem .5rem 0;
  border-color: ${props => props.color ? props.color : props.theme.color.input_background};
  background-color: ${props => props.theme.color.input_background};
  color: ${props => props.theme.color.text};
  opacity: ${props => props.isSelected ? 1 : .5};
  box-shadow: ${props => props.isSelected && props.color ? `${props.color} 0 0 5px` : 'none'}
`;
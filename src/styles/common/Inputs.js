import styled from 'styled-components';

export const Label = styled.label`
  font-size: .75rem;
  line-height 1rem;
  color: ${props => props.theme.color.text}
  opacity: .75;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 1rem 0 .25rem 1rem;
`;

export const Input = styled.input`
  background-color: ${props => props.theme.color.input_background};
  border-radius: 2px;
  outline: none;
  color: ${props => props.theme.color.text};
  font-size: 1rem;
  line-height: 1.5rem;
  padding: .5rem 1rem;
  border: 0;
  border: 2px solid transparent;
  box-sizing: border-box;
  &:focus{
    border: 2px solid ${props => props.theme.color.input_border};
  }
`;

export const Textarea = styled.textarea`
  background-color: ${props => props.theme.color.input_background};
  border-radius: 2px;
  outline: none;
  color: ${props => props.theme.color.text};
  font-size: 1rem;
  line-height: 1.5rem;
  padding: .5rem 1rem;
  width: 100%;
  min-height: 300px;
  height: auto;
  resize: none;
  border: 0;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:focus{
    border: 2px solid ${props => props.theme.color.input_border};
  }
`;
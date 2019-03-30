import styled from 'styled-components';

export const Headline1 = styled.h1`
  font-size: 2rem;
  line-height: 3rem;
  color: ${props => props.theme.color.text};
  width: 100%;
  text-transform: uppercase;
  text-align: center;
`;

export const Headline2 = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${props => props.theme.color.text};
  text-align: left;
`;
import styled from 'styled-components';
import { Button } from '../../../styles/common/Buttons';

export const App = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &>${Button}{
    margin-top: 2rem;
  }
`
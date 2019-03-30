import React from 'react';
import { Headline2 } from '../../styles/common/Headlines';
import { Button } from '../../styles/common/Buttons';
import { PopupBox } from './styles/index';

const PopupComponent = ({ visible }) => {
  const close = () => {
    window.close();
  }
  return (
    <PopupBox visible={visible}>
      <Headline2>Success</Headline2>
      <Button onClick={close}>Close</Button>
    </PopupBox>
  )
}

export default PopupComponent;
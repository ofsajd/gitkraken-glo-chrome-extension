import React from 'react';
import PropTypes from 'prop-types';
import { SelectorButton } from './styles';

const SelectorItem = ({label, isSelected, clickHandler, color}) => {
  return (
    <SelectorButton onClick={clickHandler} isSelected={isSelected} color={color} >
      { label }
    </SelectorButton>
  );
}

export default SelectorItem;

SelectorItem.propTypes = {
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  clickHandler: PropTypes.func,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

SelectorItem.defaultProps = {
  label: '',
  isSelected: false,
  clickHandler: () => {},
  color: false,
};
import React from 'react';
import PropTypes from 'prop-types';

const SelectorItem = ({label, isSelected, clickHandler}) => {
  return (
    <button onClick={clickHandler} className={`label${isSelected ? 'selected' : ''}`}>
      { label }
    </button>
  );
}

export default SelectorItem;

SelectorItem.propTypes = {
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  clickHandler: PropTypes.func,
};

SelectorItem.defaultProps = {
  label: '',
  isSelected: false,
  clickHandler: () => {},
};
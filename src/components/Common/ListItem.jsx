import React from 'react';
import PropTypes from 'prop-types';

const ListItemComponent = ({item, selectAction}) => {
  const clickHandler = () => {
    selectAction(item);
  }
  return (
    <div>
      <div onClick={clickHandler}>{item.name}</div>
    </div>
  )
}

ListItemComponent.propTypes = {
  item: PropTypes.object,
  selectAction: PropTypes.func,
}
ListItemComponent.defaultProps = {
  item: {},
  selectAction: () => {},
}

export default ListItemComponent;
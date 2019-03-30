import React from 'react';
import PropTypes from 'prop-types';
import { ListItemBox, ListItemLabel } from './styles';

const ListItemComponent = ({item, selectAction}) => {
  const clickHandler = () => {
    selectAction(item);
  }
  return (
    <ListItemBox onClick={clickHandler}>
      <ListItemLabel>{item.name}</ListItemLabel>
    </ListItemBox>
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
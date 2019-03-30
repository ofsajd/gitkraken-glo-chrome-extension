import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SelectorItem from './item';
import { SelectorBox } from './styles';
import { Label } from './../../styles/common/Inputs';
import Color from '../../models/Color';

class Selector extends Component{
  constructor(props){
    super(props);
    this.isSelected = this.isSelected.bind(this);
  }

  toggleSelection(item){
    const { add, remove, name } = this.props;
    if (this.isSelected(item)) { 
      remove(item, name)
    }else{
      add(item, name);
    }
  }

  isSelected(item){
    const { selected } = this.props;
    return selected.indexOf(item) >= 0;
  }

  get itemsList(){
    const {items, display} = this.props;
    return items.map((item, index) => {
      const key = display.filter(l => typeof(item[l]) != 'undefined')[0] || null;
      const label = key ? item[key] : '';
      const color = typeof(item.color) != 'undefined' ? new Color(item.color).rgba : false;
      return (
        <SelectorItem 
          key={index} 
          label={label} 
          isSelected={this.isSelected(item)} 
          clickHandler={() => this.toggleSelection(item)} 
          color={color}
        />
      );
    });
  }

  render(){
    const { title } = this.props;
    return (
      <Fragment>
        <Label>{ title }</Label>
        <SelectorBox>
          { this.itemsList }
        </SelectorBox>
      </Fragment>
    )
  }
}

export default Selector;

Selector.propTypes = {
  items: PropTypes.array,
  name: PropTypes.string,
  display: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.array,
  add: PropTypes.func,
  remove: PropTypes.func
}

Selector.defaultProps ={
  items: [],
  name: '',
  display: 'name',
  selected: [],
  add: () => {},
  remove: () => {},
}
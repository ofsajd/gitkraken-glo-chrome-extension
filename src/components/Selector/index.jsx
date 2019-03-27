import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectorItem from './item';

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
      return (
        <SelectorItem 
          key={index} 
          label={label} 
          isSelected={this.isSelected(item)} 
          clickHandler={() => this.toggleSelection(item)} 
        />
      );
    });
  }

  render(){
    return (
      <div>
        { this.itemsList }
      </div>
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
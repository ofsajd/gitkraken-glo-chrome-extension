import React, { Component, Fragment } from 'react';
import { Input, Label } from '../../styles/common/Inputs';
import { NewListItemBox } from './styles';
import { PropTypes } from 'prop-types';
import { Button } from '../../styles/common/Buttons';


export default class NewListItemComponent extends Component{
  constructor(props){
    super(props);
    this.state ={
      name: ''
    }

    this.setName = this.setName.bind(this);
    this.createItem = this.createItem.bind(this);
  }

  setName(e){
    this.setState({name: e.target.value})
  }

  createItem(){
    const { createHandler } = this.props;
    if(this.state.name === ''){
      alert('Please enter name.');
    }else{
      createHandler(this.state.name);
    }
  }

  render(){
    const {placeholder, label, newItemLabel} = this.props;
    return (
      <Fragment>
        <Label htmlFor='name'>{ newItemLabel }</Label>
        <NewListItemBox>
          <Input placeholder={placeholder} type="text" value={this.state.name} onChange={this.setName} />
          <Button onClick={this.createItem}>{label}</Button> 
        </NewListItemBox>
      </Fragment>
    )
  }
}

NewListItemComponent.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  newItemLabel: PropTypes.string,
  createHandler: PropTypes.func,
}

NewListItemComponent.defaultProps = {
  placeholder: '',
  label: '',
  newItemLabel: '',
  createHandler: () => {},
}
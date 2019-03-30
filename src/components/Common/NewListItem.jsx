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
    this.createBoard = this.createBoard.bind(this);
  }

  setName(e){
    this.setState({name: e.target.value})
  }

  createBoard(){
    const { createHandler } = this.props;
    createHandler(this.state.name);
  }

  render(){
    const {placeholder, label} = this.props;
    return (
      <Fragment>
        <Label htmlFor='name'>Card name</Label>
        <NewListItemBox>
          <Input placeholder={placeholder} type="text" value={this.state.name} onChange={this.setName} />
          <Button onClick={this.createBoard}>{label}</Button> 
        </NewListItemBox>
      </Fragment>
    )
  }
}

NewListItemComponent.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  createHandler: PropTypes.func,
}

NewListItemComponent.defaultProps = {
  placeholder: '',
  label: '',
  createHandler: () => {},
}
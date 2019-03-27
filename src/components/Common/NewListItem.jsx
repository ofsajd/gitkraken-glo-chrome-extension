import React, { Component, Fragment } from 'react';

export default class NewBoardComponent extends Component{
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
    return (
      <Fragment>
        <input type="text" value={this.state.name} onChange={this.setName} />
        <button onClick={this.createBoard}>Create new board</button>
      </Fragment>
    )
  }
}


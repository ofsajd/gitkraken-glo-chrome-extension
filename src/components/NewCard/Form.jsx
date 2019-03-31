import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelsSelectorContainer from '../../containers/Selectors/Labels';
import MembersSelectorContainer from '../../containers/Selectors/Members';
import { Input, Textarea, Label } from '../../styles/common/Inputs';
import { Button, BackButton } from '../../styles/common/Buttons';
import { FormBox } from '../../styles/common/Form';
import { Headline2 } from '../../styles/common/Headlines';
import { Header } from '../../styles/common/Header';

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      description: '',
      assignees: [],
      labels: [],
      due_date: '',
     }
     this.formatDescription = this.formatDescription.bind(this);
     this.setValue = this.setValue.bind(this);
     this.addItem = this.addItem.bind(this);
     this.removeItem = this.removeItem.bind(this);
     this.submit = this.submit.bind(this);
  }

  componentDidMount(){
    this.formatDescription(this.props.info);
  }

  formatDescription(info){
    let description = '';
    description += `### SOURCE URL: \n ${info.pageUrl} \n\n`
    // Image || media detection
    if(info.hasOwnProperty('srcUrl') && info.hasOwnProperty('mediaType')){
      if(info.mediaType === 'image'){
        description += `![Image](${info.srcUrl}) \n`;
      }else{
        description += `[${info.mediaType} link](${info.srcUrl}) \n`;
      }
    }
    // Selected text
    if(info.hasOwnProperty('selectionText')){
      const paragraphs = info.selectionText.split('\n');
      description += `### SELECTED TEXT: \n`
      paragraphs.map(p => {
        description += `> ${p} \n`;
      });
    }
    if(info.hasOwnProperty('linkUrl')){
      description += `${info.linkUrl} \n`
    }
    this.setState({description});
  }

  addItem(item, name){
    this.setState({
      [name]: [...this.state[name], item],
    });
  }

  removeItem(item, name){
    this.setState({
      [name]: this.state[name].filter(i => JSON.stringify(i) !== JSON.stringify(item)),
    });
  }

  setValue(e){
    this.setState({[e.target.name]: e.target.value});
  }

  submit(){
    if(this.state.name === ''){
      alert('Please enter card name.');
    }else{
      const { currentBoard, currentColumn } = this.props;
      this.props.createCard({...this.state, board_id: currentBoard, column_id: currentColumn});
    }
  }

  render() { 
    const { prev, goBack } = this.props;
    const backButton = prev ? (<BackButton onClick={goBack}></BackButton>) : '';
    return ( 
      <FormBox>
        <Header>
          { backButton }
          <Headline2>Create comment </Headline2>
        </Header>
        <Label htmlFor='name'>Card name</Label>
        <Input placeholder="Enter card name" id="name" name="name" onChange={this.setValue} type="text" value={this.state.name} />
        <Label htmlFor='description'>Card Description (Markdown syntax)</Label>
        <Textarea placeholder="Enter card description" row="10" name="description" id="description" onChange={this.setValue} value={this.state.description} />
        <Label htmlFor='due_date'>Due date</Label>
        <Input type="date" name="due_date" id="due_date" onChange={this.setValue} value={this.state.due_date} />
        <LabelsSelectorContainer name="labels" title="Labels" display={['name']} selected={this.state.labels} add={this.addItem} remove={this.removeItem} />
        <MembersSelectorContainer name="assignees" title="Assignees" display={['name', 'username']} selected={this.state.assignees} add={this.addItem} remove={this.removeItem} />
        <Button onClick={this.submit}>Save</Button>
      </FormBox>
     );
  }
}
 
export default NewCardForm;

NewCardForm.propTypes = {
  currentColumn: PropTypes.string,
  currentBoard: PropTypes.string,
  info: PropTypes.object,
  createCard: PropTypes.func,
}

NewCardForm.defaultProps = {
  currentColumn: '',
  currentBoard: '',
  info: {},
  createCard: () => {}
}
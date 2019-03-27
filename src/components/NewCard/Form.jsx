import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LabelsSelectorContainer from '../../containers/Selectors/Labels';
import MembersSelectorContainer from '../../containers/Selectors/Members';

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
    description += `SOURCE URL: ${info.pageUrl} \n\n\n`
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
    const { currentBoard, currentColumn } = this.props;
    this.props.createCard({...this.state, boardId: currentBoard, columnId: currentColumn});
  }

  render() { 
    return ( 
      <div>
        <input name="name" onChange={this.setValue} type="text" value={this.state.name} />
        <textarea name="description" onChange={this.setValue} value={this.state.description} />
        <input type="date" name="due_date" onChange={this.setValue} value={this.state.due_date} />
        <LabelsSelectorContainer name="labels" display={['name']} selected={this.state.labels} add={this.addItem} remove={this.removeItem} />
        <MembersSelectorContainer name="assignees" display={['name', 'username']} selected={this.state.assignees} add={this.addItem} remove={this.removeItem} />
        <button onClick={this.submit}>Save</button>
      </div>
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
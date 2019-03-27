import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      description: '',
     }
     this.formatDescription = this.formatDescription.bind(this);
     this.setValue = this.setValue.bind(this);
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

  setValue(e){
    this.setState({[e.target.name]: e.target.value});
  }

  submit(){
    const { currentBoard, currentCard } = this.props;
    this.props.createComment({...this.state, board_id: currentBoard, card_id: currentCard});
  }

  render() { 
    return ( 
      <div>
        <textarea name="description" onChange={this.setValue} value={this.state.description} />
        <button onClick={this.submit}>Save</button>
      </div>
     );
  }
}
 
export default NewCommentForm;

NewCommentForm.propTypes = {
  currentColumn: PropTypes.string,
  currentBoard: PropTypes.string,
  currentCard: PropTypes.string,
  info: PropTypes.object,
  createComment: PropTypes.func,
}

NewCommentForm.defaultProps = {
  currentColumn: '',
  currentBoard: '',
  currentCard: '',
  info: {},
  createComment: () => {}
}
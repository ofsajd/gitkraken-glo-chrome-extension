import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Textarea, Label } from '../../styles/common/Inputs';
import { Button } from '../../styles/common/Buttons';
import { FormBox } from '../../styles/common/Form';
import { Header } from '../../styles/common/Header';
import { BackButton } from '../../styles/common/Buttons';
import { Headline2 } from '../../styles/common/Headlines';

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

  setValue(e){
    this.setState({[e.target.name]: e.target.value});
  }

  submit(){
    const { currentBoard, currentCard } = this.props;
    this.props.createComment({...this.state, board_id: currentBoard, card_id: currentCard});
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
        <Label htmlFor='description'>Card Description (Markdown syntax)</Label>
        <Textarea placeholder="Enter card description" row="10" name="description" id="description" onChange={this.setValue} value={this.state.description} />
        <Button onClick={this.submit}>Save</Button>
      </FormBox>
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
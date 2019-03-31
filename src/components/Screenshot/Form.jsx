import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';
import { Button } from '../../styles/common/Buttons';
import { FormBox, Divider } from '../../styles/common/Form';
import { Label, Textarea } from '../../styles/common/Inputs';
import { Header } from '../../styles/common/Header';
import { BackButton } from '../../styles/common/Buttons';
import { Headline2 } from '../../styles/common/Headlines';

class ScreenshotFormComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      description: '',
      currentTool: Tools.Pencil,
      scaleX: 0,
      scaleY: 0,
      height: 600,
    }
    this.image = new Image();
    this.image.onload = this.imageLoaded.bind(this);
    this.setTool = this.setTool.bind(this);
    this.save = this.save.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  imageLoaded(e){
    this.setState({
      scaleX: (window.innerWidth - 64)/e.path[0].width,
      scaleY: (window.innerWidth - 64)/e.path[0].height,
      height: e.path[0].height * (window.innerWidth - 64)/e.path[0].width,
    }, () => {
      this.sketch.addImg(this.props.info.image, {left: 0, top: 0, scale: this.state.scaleX});
    });
  }

  updateSketchSize(){
    this.setState({
      height: this.image.height * (window.innerWidth - 64)/this.image.width,
    });
  }

  componentDidMount(){
    this.image.src = this.props.info.image;
    window.addEventListener("resize", this.updateSketchSize.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateSketchSize.bind(this));
  }

  setValue(e){
    this.setState({[e.target.name]: e.target.value});
  }

  save(){
    const { saveAttachment, currentBoard, currentCard } = this.props;
    saveAttachment({
      board_id: currentBoard,
      card_id: currentCard,
      file: this.sketch.toDataURL(),
      description: this.state.description,
    });
  }

  setTool(tool){
    this.setState({
      currentTool: tool
    });
  }

  render(){
    const { prev, goBack } = this.props;
    const backButton = prev ? (<BackButton onClick={goBack}></BackButton>) : '';
    return (
      <FormBox>
        <Header>
          { backButton }
          <Headline2>Create comment with screenshot</Headline2>
        </Header>
        <Button onClick={() => {this.setTool(Tools.Pencil)}}>Pencil</Button>
        <Button onClick={() => {this.setTool(Tools.Line)}}>Line</Button>
        <Button onClick={() => {this.setTool(Tools.Rectangle)}}>Rectangle</Button>
        <Button onClick={() => {this.setTool(Tools.Circle)}}>Circle</Button>
        <SketchField 
          name='sketch'
          ref={c => (this.sketch = c)}
          tool={this.state.currentTool}
          lineColor='black'
          height={this.state.height}
          lineWidth={3}
        />
        <Label htmlFor='description'>Card Description (Markdown syntax)</Label>
        <Textarea placeholder="Enter card description" row="10" name="description" id="description" onChange={this.setValue} value={this.state.description} />
        <Divider />
        <Button onClick={this.save}>Save</Button>
        
      </FormBox>
    )
  }
}

export default ScreenshotFormComponent;
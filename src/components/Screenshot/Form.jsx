import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';
import { Button } from '../../styles/common/Buttons';
import { FormBox, Divider } from '../../styles/common/Form';
import { Label, Textarea } from '../../styles/common/Inputs';
import { Header } from '../../styles/common/Header';
import { BackButton } from '../../styles/common/Buttons';
import { Headline2 } from '../../styles/common/Headlines';
import { ToolsBox } from './styles/index';

class ScreenshotFormComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      description: '',
      currentTool: Tools.Pencil,
      fillColor: 'transparent',
      lineColor: '#000',
      scaleX: 0,
      scaleY: 0,
      height: 600,
    }
    this.image = new Image();
    this.image.onload = this.imageLoaded.bind(this);
    this.setTool = this.setTool.bind(this);
    this.setFillColor = this.setFillColor.bind(this);
    this.setLineColor = this.setLineColor.bind(this);
    this.isActiveFillColor = this.isActiveFillColor.bind(this);
    this.isActiveLineColor = this.isActiveLineColor.bind(this);
    this.isActiveTool = this.isActiveTool.bind(this);
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

  setFillColor(color){
    this.setState({
      fillColor: color
    });
  }

  setLineColor(color){
    this.setState({
      lineColor: color
    });
  }

  isActiveTool(name){
    return name === this.state.currentTool;
  }

  isActiveFillColor(color){
    return color === this.state.fillColor;
  }

  isActiveLineColor(color){
    return color === this.state.lineColor;
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
        <Label>Image edit tools</Label>
        <ToolsBox>
          <Button active={this.isActiveTool(Tools.Pencil)} onClick={() => {this.setTool(Tools.Pencil)}}>Pencil</Button>
          <Button active={this.isActiveTool(Tools.Line)} onClick={() => {this.setTool(Tools.Line)}}>Line</Button>
          <Button active={this.isActiveTool(Tools.Rectangle)} onClick={() => {this.setTool(Tools.Rectangle)}}>Rectangle</Button>
          <Button active={this.isActiveTool(Tools.Circle)} onClick={() => {this.setTool(Tools.Circle)}}>Circle</Button>
        </ToolsBox>
        <Label>Image fill color</Label>
        <ToolsBox>
          <Button active={this.isActiveFillColor('red')} onClick={() => {this.setFillColor('red')}}>Red</Button>
          <Button active={this.isActiveFillColor('black')} onClick={() => {this.setFillColor('black')}}>Black</Button>
          <Button active={this.isActiveFillColor('green')} onClick={() => {this.setFillColor('green')}}>Green</Button>
          <Button active={this.isActiveFillColor('yellow')} onClick={() => {this.setFillColor('yellow')}}>Yellow</Button>
          <Button active={this.isActiveFillColor('wite')} onClick={() => {this.setFillColor('wite')}}>White</Button>
        </ToolsBox>
        <Label>Image line color</Label>
        <ToolsBox>
          <Button active={this.isActiveLineColor('red')} onClick={() => {this.setLineColor('red')}}>Red</Button>
          <Button active={this.isActiveLineColor('black')} onClick={() => {this.setLineColor('black')}}>Black</Button>
          <Button active={this.isActiveLineColor('green')} onClick={() => {this.setLineColor('green')}}>Green</Button>
          <Button active={this.isActiveLineColor('yellow')} onClick={() => {this.setLineColor('yellow')}}>Yellow</Button>
          <Button active={this.isActiveLineColor('wite')} onClick={() => {this.setLineColor('wite')}}>White</Button>
        </ToolsBox>
        <SketchField 
          name='sketch'
          ref={c => (this.sketch = c)}
          tool={this.state.currentTool}
          lineColor='black'
          height={this.state.height}
          fillColor={this.state.fillColor}
          lineColor={this.state.lineColor}
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
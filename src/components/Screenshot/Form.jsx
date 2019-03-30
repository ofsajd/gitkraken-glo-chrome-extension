import React, { Component } from 'react';
import { SketchField, Tools } from 'react-sketch';
import { Button } from '../../styles/common/Buttons';
import { FormBox } from '../../styles/common/Form';
import { Label, Textarea } from '../../styles/common/Inputs';

class ScreenshotFormComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      description: '',
      currentTool: Tools.Pencil,
    }
    this.save = this.save.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
    this.sketch.setBackgroundFromDataUrl(this.props.info.image, {
      stretchedY: true,
      stretchedX: true,
      stretchedY: true,
      originX: 'left',
      originY: 'top'
    });
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

  render(){
    return (
      <FormBox>
        <SketchField 
          name='sketch'
          ref={c => (this.sketch = c)}
          tool={Tools.Pencil}
          lineColor='black'
          height={500}
          lineWidth={3}
        />
        <Label htmlFor='description'>Card Description (Markdown syntax)</Label>
        <Textarea placeholder="Enter card description" row="10" name="description" id="description" onChange={this.setValue} value={this.state.description} />
        <Button onClick={this.save}>Save</Button>
        
      </FormBox>
    )
  }
}

export default ScreenshotFormComponent;
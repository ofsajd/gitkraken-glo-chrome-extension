import React, { Component } from 'react';
import NewCommentFormContainer from '../../components/NewComment';
import { SketchField, Tools } from 'react-sketch';

class ScreenshotFormComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentTool: Tools.Pencil,
    }
    this.save = this.save.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
    this.sketch.setBackgroundFromDataUrl(this.props.info.image);
  }

  save(){
    const { saveAttachment, currentBoard, currentCard } = this.props;
    console.log(currentBoard, currentCard);
    saveAttachment({
      board_id: currentBoard,
      card_id: currentCard,
      file: this.sketch.toDataURL()
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.save}>
          Save
        </button>
        <SketchField 
          name='sketch'
          ref={c => (this.sketch = c)}
          tool={Tools.Pencil}
          lineColor='black'
          width={600}
          height={400}
          lineWidth={3}
         />
        <NewCommentFormContainer {...this.props} />
      </div>
    )
  }
}

export default ScreenshotFormComponent;
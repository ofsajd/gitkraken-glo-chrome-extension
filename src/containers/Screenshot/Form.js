import { connect } from 'react-redux';
import ScreenshotFormComponent from '../../components/Screenshot/Form';
import { saveAttachment, setCurrentStep } from '../../redux/actions';;

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard').id,
    currentColumn: state.get('currentColumn').id,
    currentCard: state.get('currentCard').id,
    props,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    saveAttachment: (data) => {
      dispatch(saveAttachment(data));
    },
    goBack: () => {
      dispatch(setCurrentStep(props.prev));
    },
  }
}

const ScreenshotFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenshotFormComponent);

export default ScreenshotFormContainer;
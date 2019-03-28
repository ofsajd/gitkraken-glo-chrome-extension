import { connect } from 'react-redux';
import ScreenshotFormComponent from '../../components/Screenshot/Form';
import { saveAttachment } from '../../redux/actions';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard').id,
    currentColumn: state.get('currentColumn').id,
    currentCard: state.get('currentCard').id,
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveAttachment: (data) => {
      dispatch(saveAttachment(data));
    }
  }
}

const ScreenshotFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenshotFormComponent);

export default ScreenshotFormContainer;
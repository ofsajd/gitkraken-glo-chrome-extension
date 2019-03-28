import { connect } from 'react-redux';
import { saveAttachment } from '../../redux/actions';
import ScreenshotComponent from '../../components/Screenshot';

const mapStateToProps = (state, props) => {
  return {
    currentBoard: state.get('currentBoard'),
    currentColumn: state.get('currentrColumn'),
    currentCard: state.get('currentCard'),
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
}

const ScreenshotContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenshotComponent);

export default ScreenshotContainer;
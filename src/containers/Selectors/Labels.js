import { connect } from 'react-redux';
import SelectorComponent from '../../components/Selector';

const mapStateToProps = (state, props) => {
  return {
    items: state.get('labels'),
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
  
}

const LabelsSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectorComponent);

export default LabelsSelectorContainer;
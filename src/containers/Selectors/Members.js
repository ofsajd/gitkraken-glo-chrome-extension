import { connect } from 'react-redux';
import SelectorComponent from '../../components/Selector';

const mapStateToProps = (state, props) => {
  return {
    items: state.get('members'),
    props,
  }
}

const mapDispatchToProps = (dispatch) => {
  
}

const MembersSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectorComponent);

export default MembersSelectorContainer;
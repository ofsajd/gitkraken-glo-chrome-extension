import { connect } from 'react-redux';
import { loadToken } from './../../redux/actions';
import MainComponent from '../../components/Main';

const mapStateToProps = (state) => {
  return {
    authenticated: state.get('authenticated'),
    success: state.get('success'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadToken: () => {
      dispatch(loadToken());
    },
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);

export default MainContainer;
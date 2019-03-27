import { connect } from 'react-redux';
import { receiveToken } from './../../redux/actions';
import SignInComponent from '../../components/SignInComponent';

const mapStateToProps = (state) => {
  return {
    authenticated: state.get('authenticated'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveToken: (code) => {
      dispatch(receiveToken(code));
    }
  }
}

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInComponent);

export default SignInContainer;
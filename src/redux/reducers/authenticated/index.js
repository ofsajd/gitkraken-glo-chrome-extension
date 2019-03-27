import actions from "../../../enum/actions";

const authenticated = (state = false, action) => {
  switch(action.type){
    case actions.LOGIN: {
      return true;
    }
    case actions.LOGOUT: {
      return false;
    }
    default: {
      return state;
    }
  }
}

export default authenticated;
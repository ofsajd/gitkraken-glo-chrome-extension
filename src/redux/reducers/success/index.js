import actions from "../../../constsants/actions";

const success = (state = false, action) => {
  switch(action.type){
    case actions.SET_SUCCESS: {
      return true;
    }
    default: {
      return state;
    }
  }
}

export default success;
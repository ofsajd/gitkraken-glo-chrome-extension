import actions from "../../../constsants/actions";

const currentStep = (state = '', action) => {
  switch (action.type){
    case actions.SET_CURRENT_STEP: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default currentStep;
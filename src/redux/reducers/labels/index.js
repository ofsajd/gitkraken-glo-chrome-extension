import actions from "../../../enum/actions";

const labels = (state = [], action) => {
  switch(action.type){
    case actions.SET_LABELS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default labels;
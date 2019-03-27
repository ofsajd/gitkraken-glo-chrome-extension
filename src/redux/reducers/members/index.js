import actions from "../../../enum/actions";

const members = (state = [], action) => {
  switch(action.type){
    case actions.SET_MEMBERS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default members;
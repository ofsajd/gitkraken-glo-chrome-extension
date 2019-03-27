import actions from "../../../enum/actions";

const cards = (state = [], action) => {
  switch(action.type){
    case actions.SET_CARDS: {
      return action.payload;
    }
    default: return state;
  }
}

export default cards;
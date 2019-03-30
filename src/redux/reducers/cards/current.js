import actions from "../../../constsants/actions";
import Card from "../../../models/Card";

const currentCard = (state = new Card(), action) => {
  switch(action.type){
    case actions.SET_CURRENT_CARD: {
      return new Card(action.payload);
    }
    default: {
      return state;
    }
  }
}

export default currentCard;
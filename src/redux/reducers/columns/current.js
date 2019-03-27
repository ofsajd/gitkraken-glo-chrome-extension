import actions from "../../../enum/actions";
import Column from "../../../models/Column";

const currentColumn = (state = new Column(), action) => {
  switch(action.type){
    case actions.SET_CURRENT_COLUMN: {
      return new Column(action.payload);
    }
    default: {
      return state;
    }
  }
}

export default currentColumn;
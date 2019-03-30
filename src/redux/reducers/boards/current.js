import actions from "../../../constsants/actions";
import Board from "../../../models/Board";

const currentBoard = (state = new Board(), action) => {
  switch(action.type){
    case actions.SET_CURRENT_BOARD: {
      return new Board(action.payload);
    }
    default: {
      return state;
    }
  }
}

export default currentBoard;
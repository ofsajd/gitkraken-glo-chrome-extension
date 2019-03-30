import actions from "../../../constsants/actions";

const boards = (state = [], action) => {
  switch(action.type){
    case actions.SET_BOARDS: {
      return action.payload;
    }
    case actions.ADD_SINGLE_BOARD: {
      return [...state, action.payload];
    }
    case actions.REMOVE_SINGLE_BOARD: {
      return state.filter(b => b.id !== action.payload);
    }
    default:{
      return state;
    } 
    
  }
}

export default boards;
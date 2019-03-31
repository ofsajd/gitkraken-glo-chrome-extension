import actions from "../../../constsants/actions";

const columns = (state = [], action) => {
  switch(action.type){
    case actions.SET_COLUMNS: {
      return action.payload;
    }
    case actions.ADD_SINGLE_COLUMN: {
      return [...state, action.payload];
    }
    default:{
      return state;
    } 
    
  }
}

export default columns;
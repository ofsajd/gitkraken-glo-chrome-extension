import actions from "../../../enum/actions";

const columns = (state = [], action) => {
  switch(action.type){
    case actions.SET_COLUMNS: {
      return action.payload;
    }
    default:{
      return state;
    } 
    
  }
}

export default columns;
import { SELECTED_QUESTION } from "../actions/selectQs";

 const selectQ =(state = {}, action) =>{
  switch (action.type) {
    case SELECTED_QUESTION:
      return {
        ...state,
        ...action.question,
      };

    default:
      return state;
  }
}

export default selectQ
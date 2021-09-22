import { SELECTED_QUESTION } from "../actions/selectQs";

 const que =(state = {}, action)=> {
  switch (action.type) {
    case SELECTED_QUESTION:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
}

export default que
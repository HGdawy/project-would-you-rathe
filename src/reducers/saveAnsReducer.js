import { SAVE_ANSWER } from "../actions/save";

const answer =(state = {}, action) =>{
  switch (action.type) {
    case SAVE_ANSWER:
      return {
        ...state,
        answer: action.answer
      };
    default:
      return state;
  }
}

export default answer
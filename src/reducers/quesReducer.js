import { RECIEVE_QUESTIONS } from "../actions/que";
import { ASK_QUESTION } from "../actions/askQuestion";
import { SAVE_QUESTION } from "../actions/save";

const ques=(state = {}, action)=> {
  switch (action.type) {
    case RECIEVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ASK_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        ...action.question,
      };

    default:
      return state;
  }
}

export default ques
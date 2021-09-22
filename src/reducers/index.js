import { combineReducers } from "redux";

//step two import reducers
import users from "./userReducer";
import ques from "./quesReducer";
import username from "./userName";
import que from "./qReducer";
import answer from "./saveAnsReducer";
import selectQ from "./selectReducer";


export default combineReducers({
  users,
  ques,
  username,
  que,
  answer,
  selectQ,
});

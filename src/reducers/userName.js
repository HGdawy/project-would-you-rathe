import { SELECTED_USERNAME } from "../actions/users";

 const username =(state = {}, action) => {
  switch (action.type) {
    case SELECTED_USERNAME:
      return {
        ...state,
        ...action.username
      };
    default:
      return state;
  }
}


export default username
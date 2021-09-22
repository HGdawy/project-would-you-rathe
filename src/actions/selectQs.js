export const SELECTED_QUESTION = "SELECTED_QUESTION";

export const selectQue = (question) => {
    return{
  type: SELECTED_QUESTION,
  question,
}};

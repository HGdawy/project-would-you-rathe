export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";


export const saveQue = (question) => {
    return{
  type: SAVE_QUESTION,
  question,
}};

export const saveAns = (answer) => {
    return{
  type: SAVE_ANSWER,
  answer: answer
}};
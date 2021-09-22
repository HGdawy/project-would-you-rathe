export const ASK_QUESTION = "ASK_QUESTION";


export const askQuestion = (question) => { 
  return{
  type: ASK_QUESTION,
  question,
}};

export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS";

export const recieveQs = (questions) => {
    return{
  type: RECIEVE_QUESTIONS,
  questions,  
}};

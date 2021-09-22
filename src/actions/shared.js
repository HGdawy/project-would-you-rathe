import { getUsers } from "./users";
import { recieveQs } from "./que";
import { askQuestion } from "./askQuestion";
import { saveQue , saveAns} from "./save";
import { selectQue } from "./selectQs";

import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../DATA";

export const handleInitialData = () => (dispatch) => {
  _getUsers().then((users) => {
    dispatch(getUsers(users));
  });
};

export const handleQs = () => (dispatch) => {
  _getQuestions().then((questions) => {
    dispatch(recieveQs(questions));
  });
};

export const AddQ = (question) => (dispatch) => {
  _saveQuestion(question).then((question) => {
    dispatch(askQuestion(question));
  });
};
export const saveQ = (question) => (dispatch) => {
  _saveQuestionAnswer(question).then((question) => {
    dispatch(saveQue(question));
  });
};
export const selectQ = (question) => (dispatch) => {
  dispatch(selectQue(question));
};

export const saveAnswer = (answer) => (dispatch) => {
  dispatch(saveAns(answer));
};

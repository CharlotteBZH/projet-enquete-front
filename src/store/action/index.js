export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const GET_CHAPTER = 'GET_CHAPTER';
export const GET_NEXT = 'GET_NEXT';

export const REGISTRATION_INPUT_CHANGE = 'REGISTRATION_INPUT_CHANGE';
export const REGISTRATION_SUBMIT = 'REGISTRATION_SUBMIT';

export const getNext = () => ({
  type: GET_NEXT,
});

export const getChapter = () => ({
  type: GET_CHAPTER,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});


export const registrationSubmit = () => ({
  type: REGISTRATION_SUBMIT,
});

export const registrationInputChange = (payload) => ({
  type: REGISTRATION_INPUT_CHANGE,
  payload,
});
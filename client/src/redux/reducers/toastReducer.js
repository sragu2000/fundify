// reducer.js
const initialState = {
  toastMessage: '',
  toastType: ''
};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return {
        ...state,
        toastMessage: action.payload.message,
        toastType: action.payload.type
      };
    case 'HIDE_TOAST':
      return {
        ...state,
        toastMessage: '',
        toastType: ''
      };
    default:
      return state;
  }
};

export default toastReducer;

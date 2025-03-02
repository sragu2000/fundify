// actions.js
export const showToastMessage = (message, type) => {
    console.log('hi',message, type); // Moved console.log inside the function
    return {
      type: 'SHOW_TOAST',
      payload: { message, type }
    };
  };
  
  export const hideToastMessage = () => ({
    type: 'HIDE_TOAST'
  });
  
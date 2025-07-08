/**
 * Display a toast message.
 * @param {string} message - The message to display.
 * @param {('successToast'|'errorToast'|'warningToast')} type - The type of the message. Can only be 'A', 'B', or 'C'.
 */

export const showToastMessage = (message, type) => {
  return {
    type: "SHOW_TOAST",
    payload: { message, type },
  };
};

export const hideToastMessage = () => ({
  type: "HIDE_TOAST",
});
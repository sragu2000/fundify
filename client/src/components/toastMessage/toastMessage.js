import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import hooks
import './toastMessage.css';

const ToastMessage = () => {
  const [showToast, setShowToast] = useState(false);
  const toastMessage = useSelector(state => state.toast.toastMessage); // Select toastMessage from Redux state
  const toastType = useSelector(state => state.toast.toastType); // Select toastType from Redux state
  console.log('hi',toastMessage);
  const dispatch = useDispatch(); // Get dispatch function

  useEffect(() => {
    if (toastMessage) {
      setShowToast(true);

      const timer = setTimeout(() => {
        setShowToast(false);
        dispatch({ type: 'HIDE_TOAST' }); // Dispatch action to hide toast after 3 seconds
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toastMessage, dispatch]);

  return (
    <>
      <div className={`toast ${showToast ? 'show' : ''} ${toastType}`}>
        <div className="toast-content">
          <div>{toastMessage}</div>
        </div>
      </div>
    </>
  );
};

export default ToastMessage;

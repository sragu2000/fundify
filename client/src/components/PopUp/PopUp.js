import React, { useState } from "react";
import "./PopUp.css";
const PopUp = ({ message, onYes, buttonText, className, icon }) => {
  const [viewModal, setViewModal] = useState(false);
  const handleShowModel = (event) => {
    event.stopPropagation();
    setViewModal(true);
  };

  const closeModal = (event) => {
    event.stopPropagation();
    setViewModal(false);
  };

  const agreeModal = (event) => {
    event.stopPropagation();
    setViewModal(false);
    if (onYes[1] !== undefined) {
      onYes[0](...onYes[1]);
    } else {
      onYes[0]();
    }
  };

  return (
    <React.Fragment>
      <button
        title="Delete"
        type="button"
        onClick={handleShowModel}
        className={icon ? "popup-icon" : className}
      >
        {buttonText}
      </button>
      <div
        aria-hidden={false}
        className={
          viewModal
            ? "popup-container popup-container-active"
            : "popup-container"
        }
      >
        <div className="popup-main">
          {/* <img src={questionMark} alt="questionmark" className="popup-question-mark"></img> */}
          <div className="popup-body">{message}</div>
          {/* <div className="popup-divider"></div> */}
          <div className="popup-footer">
            <button onClick={agreeModal} className="popup-button" type="button">
              Yes
            </button>
            <button onClick={closeModal} className="popup-button" type="button">
              No
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PopUp;

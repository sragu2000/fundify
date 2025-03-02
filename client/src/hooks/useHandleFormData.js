import { useState } from "react";
import { useDispatch } from "react-redux";
import { showToastMessage } from "../redux/actions/toastActions";
const useHandleFormData = () => {
  const dispatch = useDispatch();
  const [errors, handleErrors] = useState({});
  const [formData, setFormData] = useState({});

  /**
   * Display a toast message.
   * @param {string} message - The message to display.
   * @param {('successToast'|'errorToast'|'warningToast')} type - The type of the message. Can only be 'A', 'B', or 'C'.
   */
  const toast = (message, type) => {
    dispatch(showToastMessage(message, type));
  };

  const handleChange = (event, fieldName) => {
    handleErrors({});
    if (event?.target) {
      const { name, value, files } = event.target;
      if (files) {
        // used in career brief
        setFormData({
          ...formData,
          [fieldName]: files[0],
        });
      } else {
        setFormData({
          ...formData,
          [fieldName]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [fieldName]: event,
      });
    }
  };
  return {
    formData,
    setFormData,
    errors,
    handleChange,
    handleErrors,
    toast,
  };
};

export default useHandleFormData;

export const performValidation = (validationConfig, formData) => {
  if (Array.isArray(validationConfig)) {
    let errors = {};
    validationConfig.forEach((field) => {
      let message = "";
      if (field.type === "image") {
        if (formData[field.name]?.length > field.count) {
          message = "Images allowed: " + field.count;
        }
      }
      if (field.type === "pdf") {
        if (formData[field.name]?.type !== "application/pdf") {
          message = "Only PDF files allowed";
        }
      }
      if (field.validations?.includes("onlyText")) {
        if (onlyText(formData[field.name]) === false) {
          // message = "Only text is allowed in " + field.label + " field";
          message = "Only text is allowed ";
        }
      }
      if (field.validations?.includes("url")) {
        if (isValidURL(formData[field.name]) === false) {
          message = "Invalid URL";
        }
      }
      if (field.validations?.includes("email")) {
        if (email(formData[field.name]) === false) {
          message = "Invalid Email";
        }
      }
      if (field.validations?.includes("phoneNumber")) {
        if (phoneNumber(formData[field.name]) === false) {
          message = "Invalid Phone Number";
        }
      }
      if (field.validations?.includes("required")) {
        if (required(formData[field.name]) === false) {
          // message = field.label + " is Required Field";
          message = "Required Field";
        }
      }
      if (message.trim().length !== 0) {
        errors[field.name] = message;
      }
    });
    return errors;
  }
};

function required(inputText) {
  if (inputText !== undefined) {
    if (inputText.toString().trim().length === 0) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}

function onlyText(inputText) {
  var regexPattern = /^[a-zA-Z\s]+$/;
  if (regexPattern.test(inputText)) {
    return true;
  }
  return false;
}

function isValidURL(url) {
  // Regular expression pattern for URL validation
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(url);
}

function email(inputText) {
  var regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regexPattern.test(inputText)) {
    return true;
  }
  return false;
}

function phoneNumber(inputText) {
  var regexPattern = /^\d{10}$/;
  if (regexPattern.test(inputText)) {
    return true;
  }
  return false;
}

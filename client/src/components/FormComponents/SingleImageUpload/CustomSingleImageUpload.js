import { useEffect, useState } from "react";
import SingleImageUpload from "../../SingleImageUpload/SingleImageUpload";
import "../FormComponentsTheme.css";

const CustomSingleImageUpload = ({
  onChange,
  urlArray,
  status,
  value,
  disabled,
  // Styling Props
  error,
  label,
  labelClassName,
  dropZoneSizeClassName,
  labelStyle,
  flex,
}) => {
  // Saving uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);
  // to show uploaded images when edit
  const [imageCloudinaryUrlArray, setImageCloudinaryUrlArray] = useState(
    Array.isArray(value) ? value : []
  );

  useEffect(() => {
    if (onChange) {
      onChange(uploadedImages);
    }
  }, [uploadedImages]);

  useEffect(() => {
    if (urlArray !== undefined) {
      if (Array.isArray(urlArray)) {
        setImageCloudinaryUrlArray(urlArray);
      }
    }
  }, [urlArray]);

  // console.log("uploadedImages", uploadedImages);
  const getUploadedImages = (image) => {
    setUploadedImages(image);
  };
  return (
    <div className="custom-input-container" style={{ flex: flex }}>
      <label
        className={"custom-text-label " + labelClassName || ""}
        style={labelStyle}
      >
        {label}
      </label>
      <SingleImageUpload
        onlyOneImage={true}
        transferImageToParent={getUploadedImages}
        status={status}
        retrieveImage={imageCloudinaryUrlArray}
        mode={
          disabled === undefined
            ? "editMode"
            : disabled
            ? "viewMode"
            : "editMode"
        }
        sizeClassName={dropZoneSizeClassName}
      />
      <span className="form-error-message">{error}</span>
    </div>
  );
};

export default CustomSingleImageUpload;

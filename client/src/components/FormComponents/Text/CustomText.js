import "../FormComponentsTheme.css";
const CustomText = ({
  label,
  error,
  placeholder,
  value,
  onChange,
  labelClassName,
  fieldClassName,
  disabled,
  fieldStyle,
  labelStyle,
  flex,
  type,
  name,
  tooltip,
}) => {
  let fieldType = "text";
  if (type === undefined) {
    fieldType = "text";
  } else if (type === "date") {
    fieldType = "date";
  } else if (type === "password") {
    fieldType = "password";
  } else if (type === "number") {
    fieldType = "number";
  } else if (type === "text") {
    fieldType = "text";
  } else if (type === "time") {
    fieldType = "time";
  } else {
    fieldType = "text";
  }
  return (
    <div className="custom-input-container" style={{ flex: flex }}>
      <span>
        <label
          style={labelStyle}
          className={"custom-text-label " + labelClassName || ""}
        >
          {label}
        </label>{" "}
        {tooltip ? tooltip : ""}
      </span>

      <input
        name={name || "Field"}
        style={fieldStyle}
        type={fieldType}
        placeholder={placeholder || ""}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        className={"custom-text-field " + fieldClassName || ""}
        disabled={disabled === undefined ? false : disabled ? true : false}
      ></input>
      {["LinkedIn", "Facebook", "Instagram"].includes(label) ? (
        value && <span className="form-error-message">{error}</span>
      ) : (
        <span className="form-error-message">{error}</span>
      )}
    </div>
  );
};

export default CustomText;

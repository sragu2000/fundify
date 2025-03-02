import "../FormComponentsTheme.css";

const CustomTextArea = ({
  name,
  error,
  label,
  placeholder,
  value,
  onChange,
  labelClassName,
  fieldClassName,
  rows,
  disabled,
  fieldStyle,
  labelStyle,
  flex,
}) => {
  return (
    <div className="custom-input-container" style={{ flex: flex }}>
      <label
        className={"custom-text-label " + labelClassName || ""}
        style={labelStyle}
      >
        {label}
      </label>
      <textarea
        name={name || "Field"}
        style={fieldStyle}
        placeholder={placeholder || ""}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        className={"custom-text-field " + fieldClassName || ""}
        rows={rows || 5}
        disabled={disabled === undefined ? false : disabled ? true : false}
      ></textarea>
      <span className="form-error-message">{error}</span>
    </div>
  );
};

export default CustomTextArea;

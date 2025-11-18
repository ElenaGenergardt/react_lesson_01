import "./styles.css";

function Input({ name, type = "text", placeholder = "", label = "" }) {
  return (
    <div className="input_container">
      <label className="input_label">{label}</label>
      <input
        className="input_field"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

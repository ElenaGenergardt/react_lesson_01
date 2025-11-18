import "./styles.css";

function Button({ name , type = "button" }) {
  return (
    <button className="button_component" type="{type}">
      {name}
    </button>
  );
}

export default Button;

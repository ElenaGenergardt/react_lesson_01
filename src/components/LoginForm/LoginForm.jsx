import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  const inputEmail = {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
  };
  const inputPassword = {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  };
  const buttonLogin = {
    name: "Login",
    type: "submit",
  };
  return (
    <div className="login_form_container">
      <form className="login-form">
        <h2 className="login-title">Login Fotm</h2>

        <Input
          name={inputEmail.name}
          type={inputEmail.type}
          label={inputEmail.label}
          placeholder={inputEmail.placeholder}
        />
        <Input
          name={inputPassword.name}
          type={inputPassword.type}
          label={inputPassword.label}
          placeholder={inputPassword.placeholder}
        />
        <Button
          className="login_button"
          name={buttonLogin.name}
          type={buttonLogin.type}
        />
      </form>
    </div>
  );
}

export default LoginForm;

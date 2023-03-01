import { useState, useEffect } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [userNameIsValid, setUserNameIsValid] = useState(false);
  const [userNameIsTouched, setUserNameIsTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
const userNameOnBlurHandler = () =>{
  setUserNameIsTouched(true);
  setPasswordIsTouched(true);
  if (userName.trim() === "" && password.trim() === "") {
    setUserNameIsValid(false);
    setPasswordIsValid(false);
    return;
  }
}
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setUserNameIsTouched(true);
    setPasswordIsTouched(true);
    if (userName.trim() === "" && password.trim() === "") {
      setUserNameIsValid(false);
      setPasswordIsValid(false);
      return;
    }

    setUserNameIsValid(true);
    setPasswordIsValid(true);
    console.log("username: " + userName);
    console.log("password: " + password);
    setUserName("");
    setPassword("");
  };

  const userInputHandler = (event) => {
    setUserName(event.target.value);
    setUserNameIsTouched(true);
    console.log(userName);
  };
  const userPasswordtHandler = (event) => {
    setPassword(event.target.value);
    setPasswordIsTouched(true);
    console.log(password);
  };

  const isUserNameValid = !userNameIsValid && userNameIsTouched;
  const isPasswordValid = !passwordIsValid && passwordIsTouched;

  const isUserCredAreValid = (isUserNameValid && isPasswordValid);

  const formClassIfInavlidInput = isUserCredAreValid
    ? "control-group form-control invalid input"
    : "control-group";

  useEffect(() => {
    if (isUserNameValid) {
      console.log("User name is Valid!");
    }
  }, [isUserNameValid]);

    useEffect(() => {
      if (isPasswordValid) {
        console.log("Password is Valid!");
      }
    }, [isPasswordValid]);

  return (
    <form className={formClassIfInavlidInput} onSubmit={formSubmissionHandler}>
      <div className="background-image"></div>
      <div className="form-panel">
        <div className="form-control">
          <input
            type="text"
            placeholder="user name"
            onChange={userInputHandler}
            onBlur={userNameOnBlurHandler}
            value={userName}
          ></input>
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="password"
            onChange={userPasswordtHandler}
            onBlur={userNameOnBlurHandler}
            value={password}
          ></input>
        </div>
        <div className="form-control">
          <button className="form-actions">Sign In</button>
        </div>
        {isUserCredAreValid && (
          <p className="InvalidInput">Invalid Credentails!!</p>
        )}
      </div>
    </form>
  );
};
export default LoginForm;

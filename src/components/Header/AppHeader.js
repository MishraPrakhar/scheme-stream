import "./AppHeader.css";

export default function AppHeader(props) {
  const SignInHandler = (event) => {
    if (event.target.value !== "") {
      console.log(props);
      props.onLoginOption(true);
    }
  };

  return (
    <header className="Header">
      <h2 className="HeaderName">Scheme Stream</h2>
      <div className="Account">
        <button value ="login" className="Account__Type" onClick={SignInHandler}>
          My Account
        </button>
      </div>
    </header>
  );
}

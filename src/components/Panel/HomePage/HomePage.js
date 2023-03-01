import "./HomePage.css";
import MainPage from "../MainPage/MainPage";
import AppHeader from "../../Header/AppHeader";
import AppFooter from "../../Footer/AppFooter";
import { useState } from "react";

export default function HomePage() {
  const AppOptions = ["Scheme Portal", "Portfolio", "About"];
  console.log(AppOptions);

    const [isLoginRequested, setIsLoginRequested] = useState(false);
    const LoginOptionHandler = (isLogin) => {
      console.log(isLogin);
      setIsLoginRequested(isLogin);
    };
  return (
    // <div className="MainPanel">
    //   <LeftPanel types={schemeTypes} />
    //   <RightPanel types={schemeTypes} />
    // </div>

    <div className="HomePage">
      <AppHeader onLoginOption={LoginOptionHandler} />
      <MainPage menuOptions={AppOptions} isLogin={isLoginRequested} />
      <AppFooter copyRight="Prakhar LLC" />
    </div>
  );
}

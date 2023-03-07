import React from "react";
import { useState } from "react";
import LoginForm from "../../Form/LoginForm";
import Menu from "../../Menu/Menu";
import Scheme from "../../Scheme/Scheme";

import "./MainPage.css";

export default function MainPage(props) {
  const [schemes, setSchemes] = useState([]);
  const getOptionHandler = (selectedMenuResponse) => {
    console.log(selectedMenuResponse);
    if (undefined !== selectedMenuResponse) setSchemes(selectedMenuResponse);
  };

  return (
    <div className="MainPage">
      <div className="MenuOption">
        {props.menuOptions.map((options) => (
          <Menu key= {options} menuOption={options} onOptionSelect={getOptionHandler} />
        ))}
      </div>
      {props.isLogin ? <LoginForm /> : <></>}
      <Scheme scheme={schemes} />
    </div>
  );
}

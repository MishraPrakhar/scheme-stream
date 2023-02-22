import React from "react";
import { useState } from "react";
import Menu from "../../Menu/Menu";
import Scheme from "../../Scheme/Scheme";

import "./MainPage.css";

export default function MainPage(props) {

  const [schemes, setSchemes] = useState([]);
  const getOptionHandler = (selectedMenuResponse) => {
    console.log(selectedMenuResponse);
    setSchemes(selectedMenuResponse);
  };

  return (
    <div className="MainPage">
      {props.menuOptions.map((options) => (
        <Menu menuOption={options} onOptionSelect={getOptionHandler} />
      ))}

      <Scheme scheme={schemes} />
    </div>
  );
}

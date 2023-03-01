import React from "react";
import { useState } from "react";
import "./Menu.css";

const Menu = (props) => {
  console.log("Menu : " + props.menuOption);

  const [schemes, setSchemes] = useState([]);
  async function getMenuOptionHandler(event) {
    if (event.target.value === "Scheme Portal") {
      const response = await fetch(
        "http://az-vm.eastus.cloudapp.azure.com:1001/api/v1/customer/schemes/all-types"
        //"http://az-vm.eastus.cloudapp.azure.com:1001/api/v1/customer/schemes/all-types"
      ).then((apiResponse) => {
        if (!apiResponse.ok) {
          console.log("error");
          return new Response("HTTP " + apiResponse.status);
        } else {
          return apiResponse;
        }
      });
      const data = await response.json();
      setSchemes(data);
      console.log("All Scheme response :", schemes);

      //Uplifting response
      props.onOptionSelect(schemes);
    }
    if (event.target.value === "Portfolio") {
      props.onOptionSelect([""]);
    }
  }

  return (
    <div className="MainMenu">
      <button
        key={props.menuOption}
        value={props.menuOption}
        className="MainMenuType"
        onClick={getMenuOptionHandler}
      >
        {props.menuOption}
      </button>
    </div>
  );
};
export default Menu;

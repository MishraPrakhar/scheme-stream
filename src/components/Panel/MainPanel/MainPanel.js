import "./MainPanel.css";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import LeftPanelStream from "../LeftPanel/LeftPanelStream";
import { useState, useEffect } from "react";

export default function MainPanel() {
const [leftSchemeTypes, setLeftSchemeTypes] = useState([]);
const [rightSchemeTypes, setRightSchemeTypes] = useState([]);

  async function fetchAllSchemeTypes() {
    const response = await fetch(
      //"http://localhost:1001/api/v1/react/customer/schemes/all-types"
      "http://13.68.159.2:1001/api/v1/customer/schemes/all-types"
    ).then((apiResponse) => {
      if (!apiResponse.ok) {
        console.log("error");
        return new Response("HTTP " + apiResponse.status);
      } else {
        return apiResponse;
      }
    });

    const data = await response.json();
    const schTypes = data.map((x) => x.schemeType);
    const uniqueSchTypes = [...new Set(schTypes)];
    console.log("main panel : ", uniqueSchTypes);
    setRightSchemeTypes(uniqueSchTypes);
    setLeftSchemeTypes(uniqueSchTypes);
  }

  useEffect(() => {
    console.log("executed only once!");
    fetchAllSchemeTypes();
  }, [""]);

  return (
    <div className="MainPanel">
      <LeftPanel types={leftSchemeTypes} />
      <RightPanel types={leftSchemeTypes} />

    </div>
  );
}

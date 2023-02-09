import "./MainPanel.css";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { useState, useEffect } from "react";

export default function MainPanel() {
const [schemeTypes, setSchemeTypes] = useState([]);


  async function fetchAllSchemeTypes() {
    const response = await fetch(
      "http://localhost:1001/api/v1/schemes/all-types"
      //"http://az-vm.eastus.cloudapp.azure.com:1001/api/v1/schemes/all-types"
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
  
    setSchemeTypes(uniqueSchTypes);
  }

  useEffect(() => {
    console.log("executed only once!");
    fetchAllSchemeTypes();
  }, [""]);

  return (
    <div className="MainPanel">
      <LeftPanel types={schemeTypes} />
      <RightPanel types={schemeTypes} />
    </div>
  );
}

import { useState } from "react";
import SchemePopUp from "../Popups/SchemePopUp";
import "./SchemeDetails.css";

const SchemeDetails = (schDetails) => {
  console.log("Schemedetails : " + JSON.stringify(schDetails));
  const [schemeInfo, setSchemeInfo] = useState([]);
  async function fetchSchemeDetails(schemeId) {
    console.log(schemeId);
    const response = await fetch(
      "http://localhost:1001/api/v1/schemes/" + schemeId + "/info"
      //"http://az-vm.eastus.cloudapp.azure.com:1001/api/v1/schemes/" + schemeId + "/info"
    );
    const data = await response.json();
    console.log("schems "+data.schemes);
    setSchemeInfo(data);
  }
  return (
    <div className="Scheme">
      <button
        value={schDetails.schemeId}
        className="scheme_cell"
        onClick={(e) => fetchSchemeDetails(e.target.value)}
      >
        {schDetails.schemeName}
      </button>
      <div className="scheme_cell">{schDetails.schemeTopicName}</div>
      <div className="scheme_cell">{schDetails.createdAt}</div>

      <SchemePopUp scheme={schemeInfo} />
    </div>
  );
};

export default SchemeDetails;

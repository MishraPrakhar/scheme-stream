import React, { useState } from "react";
import SchemeDetails from "../../Scheme/SchemeDetails";
import "./RightPanel.css";

export default function RightPanel({ types }) {
  console.log("Types from RightPanel: " + types);
  const [schDetails, setSchDetails] = useState([]);


  async function fetchSchemeTopicHandler(scheme) {
    console.log(scheme);
    const response = await fetch(
      //"http://localhost:1001/api/v1/react/customer/schemes/" + props.schemeType
      "http://localhost:1001/api/v1/schemes/" + 
      //"http://az-vm.eastus.cloudapp.azure.com:1001/api/v1/customer/schemes/" +
        scheme
    );
    const data = await response.json();
    console.log(data);
    setSchDetails(data);
  }

  return (
    <div className="RightPanel">
      {types.map((scheme) => (
        <button
          value={scheme}
          className="RightPanel__Type"
          href="#SchemesTypes"
          onClick={(e) => fetchSchemeTopicHandler(e.target.value)}
        >
          {scheme}
        </button>
      ))}

      {schDetails.map((schemes) => (
        <SchemeDetails
          schemeId={schemes.schemeId}
          schemeName={schemes.schemeName}
          schemeTopicName={schemes.schemeType}
          createdBy={schemes.createdBy}
          createdAt={schemes.createdAt}
        />
      ))}
    </div>
  );        
}

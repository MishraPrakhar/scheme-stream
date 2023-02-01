import React, { useState } from "react";
import SchemeDetails from "../../Scheme/SchemeDetails";
import "./RightPanel.css";

export default function RightPanel({ types }) {
  console.log("Types from RightPanel: " + types);
  const [schDetails, setSchDetails] = useState([]);
  async function fetchSchemeTopicHandler() {
    const response = await fetch(
      //"http://localhost:1001/api/v1/react/customer/schemes/" + props.schemeType
      "http://localhost:1001/api/v1/customer/schemes/" + types[3]
    );
    const data = await response.json();
    console.log(data);
    setSchDetails(data);
  }

  return (
    <div className="RightPanel">
      {types.map((scheme) => (
        <div
          className="RightPanel__Type"
          href="#SchemesTypes"
          onClick={fetchSchemeTopicHandler}
        >
          {scheme}
        </div>
      ))}

      {schDetails.map((schemes) => (
        <SchemeDetails
          schemeName={schemes.schemeName}
          schemeTopicName={schemes.schemeType}
          createdBy={schemes.createdBy}
          createdAt={schemes.createdAt}
        />
      ))}
    </div>
  );
}

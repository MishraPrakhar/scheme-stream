import React, { useCallback, useState, useEffect } from "react";
import "./RightPanel.css";
import SchemeDetails from "../../Scheme/SchemeDetails"

const BaseURL = "http://localhost:1001";

export default function RightPanelStream({ types }) {
  const [schDetails, setSchemeDetails] = useState([]);

  async function fetchSchemeTopicHandler(scheme) {
    const eventSource = new EventSource(
      "http://localhost:1001/api/v1/react/schemes/" + scheme
    );

    eventSource.onmessage = (e) => {
      console.log(e.data);
      setSchemeDetails(JSON.parse(e.data));
      return schDetails;
    }; //getAllSchemes(e.data);
    return () => {
      eventSource.close();
    };
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

      <SchemeDetails
        schemeId={schDetails.schemeId}
        schemeName={schDetails.schemeName}
        schemeTopicName={schDetails.schemeType}
        createdBy={schDetails.createdBy}
        createdAt={schDetails.createdAt}
      />
    </div>
  );
}

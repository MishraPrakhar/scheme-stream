import React, { useCallback, useState, useEffect } from "react";
import "./RightPanel.css";


const BaseURL = "http://localhost:1001";

export default function RightPanelStream({ types }) {
  useEffect(() => {
    const eventSource = new EventSource(
      "http://localhost:1001/api/v1/react/customer/schemes/" + scheme
    );
    eventSource.onmessage = (e) => {
      const jsonResponse = JSON.parse(e);
      setSchemeDetails(jsonResponse);
      return schemeDetails;
    }; //getAllSchemes(e.data);
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <div>
        <ul className="dropbtn">
          <li href="#Schemes">Schemes</li>
        </ul>
      </div>

      <SchemeTypes schemeType={schemeTypes} />

      <SchemeDetails schemeName={schemeDetails} />
    </div>
  );
}

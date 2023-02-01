import React, { useCallback, useState, useEffect } from "react";
import "./LeftPanel.css";
import SchemeTypes from "../../Scheme/SchemeTypes";
import SchemeDetails from "../../Scheme/SchemeDetails";

const BaseURL = "http://localhost:1001";

export default function LeftPanelStream() {
  const [status, setStatus] = useState("idle");
  const [schemeTypes, setschemeTypes] = useState([]);
  const [schemeDetails, setSchemeDetails] = useState([]);

  const fetchSchemeTypes = () => {
    setStatus("idle");
    fetch("${BaseURL}/api/v1/customer/schemes/all-types", { method: "GET" })
      .then((res) => (res.status === 200 ? res.json() : setStatus("rejected")))
      .then((result) => setschemeTypes(result.data))
      .catch((err) => setStatus("rejected"));
  };
  // const getAllSchemes = (data) => {
  //   const parsedData = JSON.parse(data);
  //   parsedData((schemeTypes) =>
  //     [...schemeTypes].map((schemeType) => {
  //       if (schemeType.schemeType === parsedData.schemeType) {
  //         setSchemeDetails[parsedData];
  //         return parsedData;
  //       }
  //       return schemeType;
  //     })
  //   );
  // };
  useEffect(() => {
    fetchSchemeTypes();

    console.log(schemeTypes);

    const schemeDetailsUrl = "${BaseURL}/api/v1/customer/schemes/" + schemeTypes.schemeType;
    console.log(schemeDetailsUrl);
    
    const eventSource = new EventSource(schemeDetailsUrl);
    eventSource.onmessage = (e) => {
      const jsonResponse = JSON.parse(e);
      setSchemeDetails(jsonResponse);
      return schemeDetails;
    };//getAllSchemes(e.data);
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

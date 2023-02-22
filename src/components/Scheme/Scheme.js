import React from "react";

import "./Scheme.css";

const Scheme = (props) => {
  console.log("Schemes : " + props.scheme);

  return (
    <div className="Scheme">
      {props.scheme.map((scheme) => (
        <ul>
          <a>{scheme.schemeName}</a>
        </ul>
      ))}
    </div>
  );
};

export default Scheme;

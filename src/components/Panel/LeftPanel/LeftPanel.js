import React, { useState } from "react";
import "./LeftPanel.css";
import SchemeTypes from "../../Scheme/SchemeTypes";

export default function LeftPanel({ types }) {
  console.log("Types from LeftPanel: ", types);
  return (
    <div className="LeftPanel">
      <div>
        <SchemeTypes type={types} />
      </div>
    </div>
  );
}

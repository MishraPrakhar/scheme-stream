import React, { useState } from "react";
import "./SchemeTypes.css";

const SchemeTypes = ({ type }) => {
  return (
    <div className="SchemeTypes">
      {type.map((schType) => (
        <div className="SchemeTypes__Type">{schType}</div>
      ))}
    </div>
  );
};
export default SchemeTypes;

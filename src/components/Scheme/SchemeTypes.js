import React, { useState } from "react";
import "./SchemeTypes.css";

export default function SchemeTypes({ type }) {
  return (
    <div className="SchemeTypes">
      {type.map((schType) => (
        <div className="SchemeTypes__Type">
          {schType}
        </div>
      ))}
    </div>
  );
}

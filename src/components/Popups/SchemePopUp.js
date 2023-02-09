import { useState } from "react";

export default function SchemePopUp(scheme) {
  console.log("SchemeInfo Pop up : " + scheme.schemes);
  const [schemeInfo, setSchemeInfo] = useState([]);
  console.log(schemeInfo);
  //setSchemeInfo[scheme];
  return (
    <div>
      {schemeInfo.map((schemes) => (
        <div>{schemes.schemes}</div>
      ))}
    </div>
  );
}

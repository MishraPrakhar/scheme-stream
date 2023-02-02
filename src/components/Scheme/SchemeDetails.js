import "./SchemeDetails.css";

const SchemeDetails = (schDetails) => {
  console.log("Schemedetails : " +JSON.stringify(schDetails));
  return (
    <div className="Scheme">
      <div className="scheme_cell">{schDetails.schemeName}</div>
      <div className="scheme_cell">{schDetails.schemeTopicName}</div>
      <div className="scheme_cell">{schDetails.createdAt}</div>
    </div>
  );
};

export default SchemeDetails;

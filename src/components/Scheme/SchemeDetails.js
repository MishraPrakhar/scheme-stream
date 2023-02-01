import "./SchemeDetails.css";

const SchemeDetails = (schDetails) => {
  console.log("Schemedetails : " +JSON.stringify(schDetails));
  return (
    <div className="Scheme">
      <p>{schDetails.schemeName}</p>
      <p>{schDetails.schemeTopicName}</p>
      <p>{schDetails.createdAt}</p>
      <p>{schDetails.schemeName}</p>
      <p>{schDetails.schemeTopicName}</p>
      <p>{schDetails.createdAt}</p>
      <p>{schDetails.schemeName}</p>
      <p>{schDetails.schemeTopicName}</p>
      <p>{schDetails.createdAt}</p>
      <p>{schDetails.schemeName}</p>
      <p>{schDetails.schemeTopicName}</p>
      <p>{schDetails.createdAt}</p>
    </div>
  );
};

export default SchemeDetails;

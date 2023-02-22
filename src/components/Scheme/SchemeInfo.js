import "./SchemeInfo.css";

const SchemeInfo = (props) => {
  console.log("SchemeInfo: ", props.schemes);
  return (
    <div>
      <div>{props.schemes.schemeName}</div>
    </div>
  );
};
export default SchemeInfo;

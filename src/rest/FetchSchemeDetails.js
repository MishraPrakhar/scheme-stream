const FetchSchemeDetails = (props) => {
  async function fetchSchemeTopicHandler() {
    const schemeType = props.schemeType;
    const response = await fetch(
      "http://localhost:1001/api/v1/customer/schemes/",
      schemeType
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
};
export default FetchSchemeDetails;

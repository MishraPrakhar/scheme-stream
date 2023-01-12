import "./AppFooter.css";

export default function AppHeader(props) {
  return (
    <footer className="Footer">
      <div className="FooterRow">
        <div className="FooterColumn"></div>
        <div className="FooterColumn"></div>
        <div className="FooterColumn"></div>
      </div>
      <div className="Copyright">
        <h3>Copyright: @{props.copyRight}</h3>
      </div>
    </footer>
  );
}

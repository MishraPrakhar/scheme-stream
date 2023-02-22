import "./AppFooter.css";

export default function AppFooter(props) {
  return (
    <footer className="Footer">
      <div className="FooterRow">
        
      </div>
      <div className="FooterRow">
        <h3>Copyright: @{props.copyRight}</h3>
      </div>
    </footer>
  );
}

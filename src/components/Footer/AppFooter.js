import "./AppFooter.css";

export default function AppHeader(props) {
  return (
    <footer className="Footer">
      <h3>Copyright: @{props.copyRight}</h3>
    </footer>
  );
}

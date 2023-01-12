import "./AppHeader.css";

export default function AppHeader() {
  return (
    <header className="Header">
      <h2 className="AppName">Scheme Stream</h2>
      <div className="Menu">
        <ul>
          <li>
            <a className="SubMenu" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="SubMenu" href="#news">
              News
            </a>
          </li>
          <li>
            <a className="SubMenu" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="SubMenu" href="#about">
              About
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

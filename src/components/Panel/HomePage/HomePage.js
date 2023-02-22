import "./HomePage.css";
import MainPage from "../MainPage/MainPage";
import AppHeader from "../../Header/AppHeader";
import AppFooter from "../../Footer/AppFooter";


export default function HomePage() {
const AppOptions = [
  "Portfolio",
  "Scheme Portal",
  "My Account",
  "Oprion1",
  "Oprion1",
  "Oprion1",
  "Oprion1",
  "Oprion1",
  "Oprion1",
  "Oprion1",
  "Oprion1",
];
console.log(AppOptions);

  return (
    // <div className="MainPanel">
    //   <LeftPanel types={schemeTypes} />
    //   <RightPanel types={schemeTypes} />
    // </div>

    <div className="HomePage">
      <AppHeader />
      <MainPage menuOptions={AppOptions} />
      <AppFooter />
    </div>
  );
}

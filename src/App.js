import './App.css';
import AppHeader from './components/Header/AppHeader';
import Content from "./components/Content/Content";
import AppFooter from "./components/Footer/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Content />
      <AppFooter copyRight="Prakhar LLC" />
    </div>
  );
}

export default App;

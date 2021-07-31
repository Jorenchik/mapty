import "./App.css";

// Components
import Map from "./components/Map";
import SideBar from "./components/Sidebar";

// Styles
import { Content } from "./App.styles";

function App() {
  return (
    <Content>
      <SideBar />
      <Map />
    </Content>
  );
}

export default App;

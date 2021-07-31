import "./App.css";

// Components
import Map from "./components/Map";
import SideBar from "./components/Sidebar";

// Styles
import { Content } from "./App.styles";
import { useEffect, useState } from "react";

const App = () => {
  const [choosedLocation, setChoosedLocation] = useState(null);

  return (
    <Content>
      <SideBar formVisible={choosedLocation ? true : false} />
      <Map setChoosedLocation={setChoosedLocation} />
    </Content>
  );
};

export default App;

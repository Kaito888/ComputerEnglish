import { useState } from "react";

import Header from "./components/Header/Header";
import UniCalculator from "./components/UniCalculator/UniCalculator";
import PolyCalculator from "./components/PolyCalculator/PolyCalculator";
import Graph2D from "./components/Graph2D/Graph2D";
import Graph3D from "./components/Graph3D/Graph3D";

import "./App.css";

const App = () => {
  const [showComponent, setShowComponent] = useState('Graph3D');

  return (
    <div className="App">
      <Header showComponent={(name) => setShowComponent(name)} />
      {
        showComponent === "UniCalculator" ? <UniCalculator /> :
          showComponent === "PolyCalculator" ? <PolyCalculator /> :
            showComponent === "Graph2D" ? <Graph2D /> :
              showComponent === "Graph3D" ? <Graph3D /> :
                <></>
      }
    </div>
  );
}

export default App;
import { useState } from "react";

import Header from "./components/Header/Header";

import UniCalculator from "./components/UniCalculator/UniCalculator";
import PolyCalculator from "./components/PolyCalculator/PolyCalculator";
import Graph2D from "./components/Graph2D/Graph2D";
import Graph3D from "./components/Graph3D/Graph3D";

import Topics from "./components/topics/Topics/Topics";
import Topic1 from "./components/topics/Topic1/Topic1";
import Topic2 from "./components/topics/Topic2/Topic2";

import "./App.css";

const App = () => {
  const [showComponent, setShowComponent] = useState('');

  function testKnowledgeHandler() {
    console.log("knowledge test opened");
  }

  return (
    <div className="App">
      <button onClick={() => testKnowledgeHandler()}>
        Test ur knowledge
      </button>
      <button onClick={() => setShowComponent('Topics')}>
        Start learning
      </button>
      {
        showComponent === 'Topics' ? <Topics /> :
            <></>
      }
    </div>
  );
}

export default App;
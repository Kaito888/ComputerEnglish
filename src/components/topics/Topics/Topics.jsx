import { useState } from "react";

import Header from "../../Header/Header";

import Topic1 from "../Topic1/Topic1";
import Topic2 from "../Topic2/Topic2";

import "./Topics.css";

const Topics = () => {
  const [showComponent, setShowComponent] = useState('Topic1');

  return (
    <div className="Topics">
      <Header showComponent={(name) => setShowComponent(name)} />
      {
        showComponent === 'Topic1' ? <Topic1 /> :
          showComponent === 'Topic2' ? <Topic2 /> :
            <></>
      }
    </div>
  );
}

export default Topics;
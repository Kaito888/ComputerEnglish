import { useState, useCallback } from "react";

import MyCheckbox from "../../components/MyCheckbox/MyCheckbox";
import MyInput from "../../components/MyInput/MyInput";
import MySlider from "../../components/MySlider/MySlider";
import MyButton from "../../components/MyButton/MyButton";

import "./Graph3DUI.css";

const Graph3DUI = ({
  scene, show, showHidePoints, showHideEdges, showHidePolygons, canPrintShadows, canPrintShadowsHandler,
  canAnimate, canDoAnimationHandler, figureChangeHandler, clearScene, figureColorChangeHandler, figureCountChangeHandler
}) => {
  const [showPanel, setShowPanel] = useState(false);
  const showHidePanel = useCallback(() => { setShowPanel(!showPanel) }, [setShowPanel, showPanel]);

  const options = [
    {
      value: 'SolarSystem',
      text: 'Солнечная система',
    }, {
      value: 'Cube',
      text: 'Куб',
    }, {
      value: 'Sphere',
      text: 'Сфера',
    }, {
      value: 'Ellipsoid',
      text: 'Эллипсоид',
    }, {
      value: 'Cone',
      text: 'Конус',
    }, {
      value: 'HyperboloidOne',
      text: 'Однополостный гиперболоид',
    }, {
      value: 'HyperboloidTwo',
      text: 'Двуполосный гиперболоид',
    }, {
      value: 'ParaboloidEll',
      text: 'Эллиптический параболоид',
    }, {
      value: 'ParaboloidHyp',
      text: 'Гиперболический параболоид',
    }, {
      value: 'CylinderEll',
      text: 'Эллиптический цилиндр',
    }, {
      value: 'CylinderHyp',
      text: 'Гиперболический цилиндр',
    }, {
      value: 'CylinderPar',
      text: 'Параболический цилиндр',
    }, {
      value: 'Torus',
      text: 'Тор',
    },
  ];

  return (
    <div>
      <button onClick={() => showHidePanel()}>
        {showPanel ? "<=" : "=>"}
      </button>
      {showPanel && (
        <div className="graph3d-ui">
          <div>
            <MyCheckbox
              text={"Точки"}
              checked={show.showPoints}
              onClick={(checked) => showHidePoints(checked)}
            />
            <MyCheckbox
              text={"Рёбра"}
              checked={show.showEdges}
              onClick={(checked) => showHideEdges(checked)}
            />
            <MyCheckbox
              text={"Полигоны"}
              checked={show.showPolygons}
              onClick={(checked) => showHidePolygons(checked)}
            />
            <MyCheckbox
              text={"Затенённость"}
              checked={canPrintShadows}
              onClick={(checked) => canPrintShadowsHandler(checked)}
            />
          </div>
          <MyCheckbox
            text={"Проигрывать анимацию"}
            checked={canAnimate}
            onClick={(checked) => canDoAnimationHandler(checked)
            }
          />
          <p>
            <MyButton
              text={'Очистить сцену'}
              onClick={() => clearScene()}
            />
          </p>
          <p>
            <select
              className="dropdown"
              onChange={(event) => figureChangeHandler(event.target.value)}
            >
              {options.map((option, index) => <option
                key={index}
                value={option.value}>{option.text}</option>)}
            </select>
          </p>
          <div>
            <MyInput
              text={"цвет"}
              onKeyUp={(value) => figureColorChangeHandler(value)}
            />
            <MySlider
              text={"детализация"}
              min={3}
              max={100}
              onInput={(value) => figureCountChangeHandler(value)}
              value={scene[0].count}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Graph3DUI;
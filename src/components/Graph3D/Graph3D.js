import { useEffect, useRef } from "react";

import Math3D, {
  Point, Light,
  Cube, Sphere, Cone, CylinderEll, CylinderHyp, CylinderPar, Ellipsoid, HyperboloidOne, HyperboloidTwo, ParaboloidEll, ParaboloidHyp, Torus,
} from "../../modules/Math3D";
import useCanvas from "../../modules/Canvas/useCanvas";

import Graph3DUI from "./Graph3DUI/Graph3DUI";

const Graph3D = () => {
  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 100 / 6);
      }
    );
  })();

  const zoom = 0.8;
  const rotate = 0.01;
  const drag = 0.05;
  let canMove = false;
  let canDrag = false;
  let canAnimate = true;

  const show = {
    showPoints: false,
    showEdges: false,
    showPolygons: true,
  }
  let canPrintShadows = true;

  const WIN = {
    left: -5,
    bottom: -5,
    width: 10,
    height: 10,
    focus: new Point(0, 0, 30),
    camera: new Point(0, 0, 40),
  };
  let LIGHT = [
    new Light(-10, 20, 0, 8000, "#ff0000"),
    new Light(10, -20, -10, 5000, '#0000ff'),
  ];

  let scene = [];

  const math3D = new Math3D({ WIN: WIN });

  let canvas = null;
  const canvas3D = useRef(null);

  useEffect(() => {
    canvas = Canvas({
      ref: canvas3D,
      width: 800,
      height: 800,
      WIN: WIN,
      callbacks: {
        wheel: (event) => wheel(event),
        mouseUp: () => mouseUp(),
        mouseDown: () => mouseDown(),
        dblclick: () => dblclick(),
        mouseMove: (event) => mouseMove(event),
        mouseLeave: () => mouseLeave(),
      },
    });

    const interval = setInterval(() => {
      scene.forEach((figure) => {
        doAnimation(figure);
        figure.animated = false;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      canvas = null;
    }
  })

  /* *************** */
  /* about callbacks */
  /* *************** */

  const wheel = (event) => {
    const delta = event.wheelDelta > 0 ? 1 / zoom : zoom;

    if (!canAnimate) {
      const matrix = math3D.zoom(delta);

      scene.forEach((scene) =>
        scene.points.forEach((point) => math3D.transform(matrix, point))
      );
    } else {
      const d = event.wheelDelta > 0 ? -zoom : zoom;
      WIN.camera.z += d;
      WIN.focus.z += d;
    }
  }
  const mouseDown = () => {
    canMove = true;
  }
  const mouseUp = () => {
    canMove = false;
  }
  const dblclick = () => {
    canDrag = !canDrag;
  }
  const mouseLeave = () => {
    canMove = false;
    canDrag = false;
  }
  const mouseMove = (event) => {
    if (!canAnimate) {
      if (canDrag) {
        const { movementX, movementY } = event;

        const matrix = math3D.drag(
          movementX * drag,
          -movementY * drag
        );

        scene.forEach((figure) =>
          figure.points.forEach((point) =>
            math3D.transform(matrix, point)
          )
        );
      } else if (canMove) {
        const { movementX, movementY } = event;

        const matrixX = math3D.rotateX(movementY * rotate);
        const matrixY = math3D.rotateY(movementX * rotate);

        scene.forEach((figure) =>
          figure.points.forEach((point) =>
            math3D.transform(matrixX, point)
          )
        );
        scene.forEach((figure) =>
          figure.points.forEach((point) =>
            math3D.transform(matrixY, point)
          )
        );
      }
    }
  }

  /* *************** */
  /* about animation */
  /* *************** */

  const setSolarSystem = () => {
    LIGHT = [new Light(0, 0, 0, 500, "#ffdd00")];
    const earth = new Sphere(30, 3);
    const moon = new Torus(30, 1.5, 1.5, 0.5);

    earth.points.forEach((point) => {
      point.x += 15;
    });
    const matrix = math3D.rotateZ(250);
    moon.points.forEach((point) => {
      math3D.transform(matrix, point);
      point.x += 21;
    });
    earth.children.push(1);

    earth.polygons.forEach((poly) => (poly.figureIndex = 0));
    moon.polygons.forEach((poly) => (poly.figureIndex = 1));

    math3D.calcCenter(earth);
    math3D.calcCenter(moon);

    earth.setAnimation("rotateZ", 0.01);
    earth.setAnimation("rotateZ", 0.01, new Point());

    moon.setAnimation("rotateZ", 0.05, earth.center);

    scene = [];
    scene[0] = earth;
    scene[1] = moon;
  }

  const doAnimation = (figure) => {
    if (!figure.animated) {
      figure.doAnimation(math3D);
      figure.children.forEach(child => {
        let animCount = 0;
        figure.animations.forEach(anim => {
          const { method, value, center } = anim;
          if (center !== figure.center) {
            scene[child].setAnimation(method, value, center);
            animCount++;
          }
        })
        doAnimation(scene[child]);
        for (let i = 0; i < animCount; i++) {
          scene[child].animations[scene[child].animations.length - i - 1].value = 0;
        }
      })
      figure.animated = true;
    }
  }

  /* *********** */
  /* about print */
  /* *********** */

  const clear = () => {
    if (canvas) canvas.clear("#C7CFFF");
  }

  const printScene = (scene) => {
    if (show.showPolygons) {
      const polygons = [];
      scene.forEach((figure) => {
        math3D.calcCenters(figure);
        math3D.calcRadius(figure);
        math3D.calcDistance(figure, WIN.camera, "distance");

        if (figure.constructor.name === ("Sphere" || "Ellipsoid")) {
          math3D.calcCenter(figure);
          math3D.changePolygonVisiblity(figure);
        }

        figure.polygons.forEach((poly) => polygons.push(poly));
      });
      math3D.sortByArtistAlgorythm(polygons);

      polygons.forEach((polygon) => {
        LIGHT.forEach((light, i) => {
          const distance = Math.sqrt(
            Math.pow(light.x - polygon.center.x, 2) +
            Math.pow(light.y - polygon.center.y, 2) +
            Math.pow(light.z - polygon.center.z, 2)
          );
          polygon.lumen[i] = math3D.calcIllumination(
            distance,
            light.lumen
          );
        });
      });

      polygons.forEach((polygon) => {
        if (polygon.visible) {
          let { r, g, b } = polygon.color;
          let R = 0,
            G = 0,
            B = 0;

          LIGHT.forEach((light, i) => {
            const rLight = light.color.r;
            const gLight = light.color.g;
            const bLight = light.color.b;
            const distance = Math.sqrt(
              Math.pow(light.x - polygon.center.x, 2) +
              Math.pow(light.y - polygon.center.y, 2) +
              Math.pow(light.z - polygon.center.z, 2)
            );

            const { isShadow, dark } = canPrintShadows
              ? math3D.calcShadow(polygon, scene, light, i)
              : { isShadow: false, dark: 1 };
            const lumen = math3D.calcIllumination(
              distance,
              light.lumen * (isShadow ? dark : 1)
            );

            R += Math.round(r * lumen + rLight * lumen);
            G += Math.round(g * lumen + gLight * lumen);
            B += Math.round(b * lumen + bLight * lumen);
          });

          R = R > 255 ? 255 : R;
          G = G > 255 ? 255 : G;
          B = B > 255 ? 255 : B;

          const points = [];
          polygon.points.forEach((num) => {
            points.push(scene[polygon.figureIndex].points[num]);
          });
          canvas.polygon(
            points.map((point) => {
              return {
                x: math3D.xs(point),
                y: math3D.ys(point),
              };
            }),
            polygon.rgbToString(R, G, B)
          );
        }
      });
    }

    if (show.showEdges) {
      scene.forEach((figure) => {
        figure.edges.forEach((edge) =>
          canvas.line(
            math3D.xs(figure.points[edge.p1]),
            math3D.ys(figure.points[edge.p1]),
            math3D.xs(figure.points[edge.p2]),
            math3D.ys(figure.points[edge.p2])
          )
        );
      });
    }

    if (show.showPoints) {
      scene.forEach((figure) => {
        figure.points.forEach((point) =>
          canvas.point(
            math3D.xs(point),
            math3D.ys(point),
            "#337"
          )
        );
      });
    }
  }

  const renderScene = (FPS) => {
    if (canvas) {
      clear();
      printScene(scene);
      canvas.textCanvas(FPS + " FPS", 10, 30);
      canvas.render();
    }
  }

  /* ********** */
  /* about 3DUI */
  /* ********** */

  const showHidePoints = (value) => {
    show.showPoints = value;
  }
  const showHideEdges = (value) => {
    show.showEdges = value;
  }
  const showHidePolygons = (value) => {
    show.showPolygons = value;
  }
  const canDoAnimationHandler = (value) => {
    canAnimate = value;
    if (!value) {
      scene.forEach(figure => figure.dropAnimation());
    }
  }
  const canPrintShadowsHandler = (value) => {
    canPrintShadows = value;
  }

  const figureChangeHandler = (value) => {
    const figures = [
      {
        type: "Cube",
        result: new Cube(),
      }, {
        type: "Sphere",
        result: new Sphere(),
      }, {
        type: "Ellipsoid",
        result: new Ellipsoid(),
      }, {
        type: "Cone",
        result: new Cone(),
      }, {
        type: "HyperboloidOne",
        result: new HyperboloidOne(),
      }, {
        type: "HyperboloidTwo",
        result: new HyperboloidTwo(),
      }, {
        type: "ParaboloidHyp",
        result: new ParaboloidHyp(),
      }, {
        type: "ParaboloidEll",
        result: new ParaboloidEll(),
      }, {
        type: "CylinderEll",
        result: new CylinderEll(),
      }, {
        type: "CylinderHyp",
        result: new CylinderHyp(),
      }, {
        type: "CylinderPar",
        result: new CylinderPar(),
      }, {
        type: "Torus",
        result: new Torus(),
      }
    ]
    if (value === "SolarSystem") setSolarSystem();
    else figures.forEach(figure => {
      if (figure.type === value) return scene = [figure.result];
    })
  }

  const figureColorChangeHandler = (value) => {
    const color = scene[0].polygons[0].hexToRgb(value);
    scene.forEach(figure => figure.polygons.forEach(poly => poly.color = color));
  }

  const figureCountChangeHandler = (value) => {
    const figures = [
      {
        type: "Cube",
        result: new Cube(),
      }, {
        type: "Sphere",
        result: new Sphere(value),
      }, {
        type: "Ellipsoid",
        result: new Ellipsoid(value),
      }, {
        type: "Cone",
        result: new Cone(value),
      }, {
        type: "HyperboloidOne",
        result: new HyperboloidOne(value),
      }, {
        type: "HyperboloidTwo",
        result: new HyperboloidTwo(value),
      }, {
        type: "ParaboloidHyp",
        result: new ParaboloidHyp(value),
      }, {
        type: "ParaboloidEll",
        result: new ParaboloidEll(value),
      }, {
        type: "CylinderEll",
        result: new CylinderEll(value),
      }, {
        type: "CylinderHyp",
        result: new CylinderHyp(value),
      }, {
        type: "CylinderPar",
        result: new CylinderPar(value),
      }, {
        type: "Torus",
        result: new Torus(value),
      }
    ]
    const fig = scene[0].constructor.name;
    figures.forEach(figure => {
      if (figure.type === fig) return scene = [figure.result];
    });
  }

  const clearScene = () => {
    LIGHT = [
      new Light(-10, 20, 10, 8000, "#ff0000"),
      new Light(10, -20, -10, 5000, "#0000ff"),
    ];
    scene = [];
    canAnimate = false;
  }

  setSolarSystem();

  const Canvas = useCanvas(renderScene);

  return (
    <div className="graph3D">
      <Graph3DUI
        show={show}
        showHidePoints={(value) => showHidePoints(value)}
        showHideEdges={(value) => showHideEdges(value)}
        showHidePolygons={(value) => showHidePolygons(value)}
        canDoAnimationHandler={(value) => canDoAnimationHandler(value)}
        figureChangeHandler={(value) => figureChangeHandler(value)}
        clearScene={() => clearScene()}
        canAnimate={canAnimate}
        canPrintShadows={canPrintShadows}
        canPrintShadowsHandler={(value) => canPrintShadowsHandler(value)}
        figureColorChangeHandler={(value) => figureColorChangeHandler(value)}
        figureCountChangeHandler={(value) => figureCountChangeHandler(value)}
        scene={scene}
      />
      <canvas ref={canvas3D}></canvas>
    </div>
  );
}

export default Graph3D;
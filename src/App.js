import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Header = () => {
  const headerStyle = {
    backgroundColor: "royalblue",
    color: "lightyellow",
    textAlign: "center",
    fontFamily: "sans-serif",
  };

  return (
    <div style={headerStyle}>
      <h1>React-Three-Fiber</h1>
    </div>
  );
};

function MyAnimatedBox(props) {
  const [active, setActive] = useState(false);
  const myMesh = useRef();

  function onClickHandler() {
    setActive(!active);
    if (!active) {
      props.setMaterial("royalblue");
    } else {
      props.setMaterial("red");
    }
  }

  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
    myMesh.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <mesh ref={myMesh} onClick={onClickHandler} scale={3}>
      <boxGeometry />
      <meshPhongMaterial color={props.color} />
    </mesh>
  );
}

const MyImage = () => {
  const src = "./images/baptist.jpg";
  return <img src={src} alt="me!" width="375" />;
};

function App() {
  const containerStyle = {
    backgroundColor: "lightyellow",
    margin: 0,
    padding: 0,
  };
  const [materialColor, setMaterialColor] = useState("royalblue");

  return (
    <div id="canvas-container" style={containerStyle}>
      <Header />
      <Canvas>
        <ambientLight intensity={(0, 1)} />
        <directionalLight color="yellow" position={[0, 0, 5]} />
        <MyAnimatedBox color={materialColor} setMaterial={setMaterialColor} />
      </Canvas>
      <div>
        {" "}
        <Canvas>
          <ambientLight intensity={(0, 1)} />
          <directionalLight color="yellow" position={[0, 0, 5]} />
          <MyAnimatedBox color={materialColor} setMaterial={setMaterialColor} />
        </Canvas>
      </div>
      <div>
        {" "}
        <Canvas>
          <ambientLight intensity={(0, 1)} />
          <directionalLight color="yellow" position={[0, 0, 5]} />
          <MyAnimatedBox color={materialColor} setMaterial={setMaterialColor} />
        </Canvas>
      </div>
      <div>
        {" "}
        <Canvas>
          <ambientLight intensity={(0, 1)} />
          <directionalLight color="yellow" position={[0, 0, 5]} />
          <MyAnimatedBox color={materialColor} setMaterial={setMaterialColor} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;

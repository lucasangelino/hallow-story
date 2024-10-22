import {
  CameraControls,
  Environment,
  Float,
  MeshReflectorMaterial,
  RenderTexture,
  Text,
  useFont,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { Color } from "three";
import { degToRad, lerp } from "three/src/math/MathUtils";
import { Camping } from "./Camping";
import { currentPageAtom } from "./UI";
import { Cementery } from "./Cementery";
import { Scenes } from "./scenes/index.js";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

export const Experience = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraPicCharacter = useRef();
  const textMaterial = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  useFrame((_, delta) => {
    textMaterial.current.opacity = lerp(
      textMaterial.current.opacity,
      currentPage === Scenes.ENTRY_POINT || currentPage === Scenes.intro
        ? 1
        : 0,
      delta * 1.5
    );
  });

  const intro = async () => {
    controls.current.dolly(-22);
    controls.current.smoothTime = 1.6;
    setTimeout(() => {
      setCurrentPage(Scenes.ENTRY_POINT);
    }, 1200);
    fitCamera();
  };

  const fitCamera = async () => {
    if (currentPage === Scenes.CEMENTERY) {
      controls.current.smoothTime = 0.8;
      controls.current.maxDistance = 5;
      controls.current.fitToBox(meshFitCameraPicCharacter.current, true);
    } else {
      controls.current.smoothTime = 1.6;
      controls.current.fitToBox(meshFitCameraHome.current, true);
    }
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCameraHome} position-z={1.5} visible={false}>
        <boxGeometry args={[7.5, 2, 2]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      <Text
        font={"fonts/Halloween2.ttf"}
        position-x={-1.3}
        position-y={-0.5}
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(30)}
        anchorY={"bottom"}
      >
        Hallow{"\n"}story
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
          ref={textMaterial}
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["red"]} />
            <Environment preset="sunset" />
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      {/* <Text position-x={0} position-y={-0.3} position-z={1} fontSize={0.1}>
        Cloudinary Midudev {"\n"}Hackaton
        <meshBasicMaterial color="white" />
      </Text> */}
      {/* <group rotation-y={degToRad(-25)} position-x={3}>
        <Camping scale={0.6} html />
        <mesh ref={meshFitCameraStore} visible={false}>
          <boxGeometry args={[2, 1, 2]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
      </group> */}

      <group rotation-y={degToRad(-100)} position-x={1}>
        <Cementery position-x={0.1} position-z={-0.8} scale={0.1} html />
        <mesh
          ref={meshFitCameraPicCharacter}
          visible={false}
          position-x={0.8}
          position-z={-0.8}
          position-y={0.5}
          rotation-y={degToRad(45)}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
      </group>

      {/* <group rotation-y={degToRad(-25)} position-x={3}>
        <Cementery position-x={2.5} position-z={-0} scale={0.1} html />
        <mesh ref={meshFitCameraStore} visible={true}>
          <boxGeometry args={[2, 1, 2]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
      </group> */}
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="forest" />
    </>
  );
};

useFont.preload("fonts/Halloween2.ttf");

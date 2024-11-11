import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import BlenderProduct from "../../components/BlenderProduct";

export default function NewProducts() {
  return (
    <div className="h-[100vh]">
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <BlenderProduct />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

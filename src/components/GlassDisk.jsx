import { useFrame, Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useState } from 'react';

function HeartModel(props) {
  const { scene } = useGLTF('/glass_disk.glb');

  const [isDragging, setIsDragging] = useState(false);

  useFrame(() => {
    if (!isDragging) {
      scene.rotation.y += 0.001;
    }
  });

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <primitive
      object={scene}
      {...props}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    />
  );
  
}
export default function HeartCanvas() {
  return (
    <div className="w-[1000px] h-[800px]">
      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <HeartModel scale={7}/>
        <Environment files="/peppermint_powerplant_2_2k.hdr" background={false} />
        <OrbitControls enableZoom={false} />
      </Canvas> */}

      <Canvas camera={{ position: [20, 20, 20], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <HeartModel position={[0, 0, 0]} scale={8} />
        <Environment files="/peppermint_powerplant_2_2k.hdr" background={false} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

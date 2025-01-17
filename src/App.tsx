// import { useState } from 'react'
import './App.css'


import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const AvatarViewer: React.FC = () => {
  const { scene } = useGLTF('https://models.readyplayer.me/6782534ac08850a48b91e381.glb', true);

  return (
    <Canvas style={{ height: '100vh', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Wrapping in Suspense for loading fallback */}
      <Suspense fallback={<div>Loading 3D Avatar...</div>}>
        <primitive object={scene} scale={1} />
      </Suspense>
      
      <OrbitControls />
    </Canvas>
  );
};

const App = () => {
  return (
    <div>
      <h1>3D Avatar Viewer</h1>
      <AvatarViewer />
    </div>
  );
};

export default App;


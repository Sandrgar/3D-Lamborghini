import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Lamborghini = () => {
    const lambo = useGLTF('./lamborghini/scene.gltf')
  return (
    <mesh>
        <hemisphereLight intensity={2}
        groundColor= 'white'/>
        <pointLight intensity={2}/>
        <primitive 
        object={lambo.scene}
        scale ={5}
        // position={[11, 0, 4]}
        rotation= {[-0, 1.7, -0]}
        />
    </mesh>
  )
}


const LamborghiniCanvas = () => {
    return(
        <Canvas
    frameloop="demand"
    camera={{position: [40, 5, 10], fov: 20}}
    gl={{preserveDrawingBuffer:true}}
    >
   <Suspense fallback={<CanvasLoader/>}>
    <spotLight
    position={[-400, 100, 10]}
    angle={0.2}
    penumbra={2}
    
    
    shadow-mapSize={1024}
    />

   

    <OrbitControls 
    maxPolarAngle={Math.PI /2.2}
    minPolarAngle={Math.PI /2.2}
    />
    <Lamborghini />
   </Suspense>

   <Preload all />

    </Canvas>
    )
    
}

export default LamborghiniCanvas
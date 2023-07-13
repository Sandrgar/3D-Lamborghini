import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'

const Lamborghini = () => {
    const lambo = useGLTF('./lamborghini/scene.gltf')
  return (
    <mesh>
        <hemisphereLight intensity={2}
        groundColor= 'yellow'/>
        <pointLight intensity={3}/>
        <primitive 
        object={lambo.scene}
        scale ={3}
        
        />
    </mesh>
  )
}


const LamborghiniCanvas = () => {
    return(
        <Canvas
    frameloop="demand"
    camera={{position: [40, 4, 10], fov: 15}}
    gl={{preserveDrawingBuffer:true}}
    >
   <Suspense fallback={<CanvasLoader/>}>
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
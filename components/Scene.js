import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import LabIcon from './LabIcon'
import { Environment } from '@react-three/drei';
import PhysicsBorders from './PhysicsBorders';
function Scene() {
    return (
        <div>
            <Canvas camera={{ fov: 8, position: [0, -10, 50] }}>
                <Physics gravity={[0, 0, 0]} iterations={1} broadphase="SAP">
                    {/* <Debug> */}
                    <Suspense fallback={null}>
                        <LabIcon />
                        <LabIcon />
                        <LabIcon />
                        <LabIcon />
                        <Environment preset="warehouse" />
                        <PhysicsBorders />
                    </Suspense>
                    {/* </Debug> */}
                </Physics>
            </Canvas>
        </div>
    )
}

export default Scene

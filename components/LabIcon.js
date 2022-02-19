import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon';
export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/tzIcon.glb')
  const [ref, api] = useBox(() => ({ args: [2, 2, 1], mass: 1, scale: [2, 2, 2] }));
  return (
    <group  ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icon.geometry}
        material={materials['Material.001']}
        position={[0, 0.92, 0]}
        material-color="01AEFA"
      />
      <group
        position={[0.11, 0.9, -0.44]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[17.92, 17.92, 17.92]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path3_1.geometry}
          material={materials['SVGMat.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path3_2.geometry}
          material={materials['SVGMat.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path3_3.geometry}
          material={materials['SVGMat.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.path3_4.geometry}
          material={materials['SVGMat.005']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[0, 0.94, -0.16]}
        scale={[0.4, 0.4, 0.4]}
      />
    </group>
  )
}

useGLTF.preload('/tzIcon.glb')
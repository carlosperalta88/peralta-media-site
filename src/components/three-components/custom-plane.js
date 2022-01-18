import * as React from 'react';
import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Plane } from '@react-three/drei';

const CustomPlane = ({ position }) => {
    return (
        <Plane 
            args={[2, 1]} 
            rotation={[45, 0, 0]}
            position={position}
            >
            <meshPhongMaterial attach='material' color={'red'} side={2} />
        </Plane>
    )
}

export default CustomPlane;
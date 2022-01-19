import * as React from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Circle } from '@react-three/drei';


const CircleShape = ({ positions, size }) => {
    const ref = useRef();

    return (
        <Circle args={size} position={positions} ref={ref}>
            <meshStandardMaterial color={'red'} attach='material' side={2} />
        </Circle>
    )
}

export default CircleShape;
import * as THREE from 'three';
import React, { useLayoutEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Line = ({ start, end, color, lineWidth }) => {
    const ref = useRef();

    useLayoutEffect(() => {
        ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)))
    }, [start, end])
    
    useFrame((state, delta) => (ref.current.rotation.x += 0.0001 * start[0]));
    useFrame((state, delta) => (ref.current.rotation.y += 0.0003 * start[2]));

    return (
        <line
            start={start}
            end={end}
            ref={ref}
        >
            <bufferGeometry />
            <lineBasicMaterial color={color} lineWidth={lineWidth} />
        </line>
    )
}

export default Line;
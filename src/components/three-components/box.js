import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Box = ({ props }) => {
    const ref = useRef();
    
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    useFrame((state, delta) => (ref.current.rotation.x += 0.01));

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5: 1}
            onClick={(ev) => click(!clicked)}
            onPointerOut={(ev) => hover(false)}
            onPointerEnter={(ev) => hover(true)}
        >
            <boxGeometry args={[1,1,1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Box;
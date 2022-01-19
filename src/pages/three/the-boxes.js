import * as React from 'react';
import CanvasLayout from '../../components/canvas-layout';
import { OrbitControls } from '@react-three/drei';
import CustomPlane from '../../components/three-components/custom-plane';
import { useFrame } from '@react-three/fiber';

const TheBoxes = ({ location }) => {

    const ref = React.useRef();
    let camera = { fov: 65, near: 0.1, far: 1000, position: [0, 0, 5] };
    const opts = []

    const positions = []

    for (let x = -4; x < 10; x++) {
        for (let y = -10; y < 10; y++) {
           for (let z = -10; z < 10; z++) {
                positions.push([x + 2, y + 2, z + .21])
           }
        }
        
    }

    // useFrame((state, delta) => (ref.current.rotation.x += 0.0001 ));
    console.log(ref)
    return (
        <CanvasLayout location={location} title="Peralta Media" camera={camera}>
            <OrbitControls ref={ref} autoRotate={true} />
            <color attach="background" args={["black"]} />
            <ambientLight intensity={0.20} />
            {positions.map((el, i) => <CustomPlane position={el} key={`cp-${i}`} /> )}
            
        </CanvasLayout>
    )
}

export default TheBoxes;
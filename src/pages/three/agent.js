import * as React from 'react';
import CanvasLayout from '../../components/canvas-layout';
import { OrbitControls, Sky } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import CircleShape from '../../components/three-components/circle-shape';

const Agent = ({ location }) => {
    const ref = React.useRef();
    let camera = { fov: 100, near: 0.1, far: 1000, position: [0, 0, 5] };
    const opts = []

    const circles = []

    for (let index = 0; index < 1404; index++) {
        const rad = Math.random(.5, 1);
        const px = Math.random(rad, rad*2)
        const py = Math.random(rad, rad*2)
        circles.push({ size: [rad, 32], position: [px*1122, 0, py*200]})
    }

    return (
        <CanvasLayout location={location} title="Peralta Media" camera={camera}>
            <OrbitControls ref={ref} />
            <color attach="background" args={["black"]} />
            <ambientLight intensity={0.20} />
            <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
            {circles.map((el, i) => <CircleShape size={el.size} positions={el.position} key={`${i}-${el.size[0]}`} />)}

        </CanvasLayout>
    )
}

export default Agent
import * as React from 'react';
import CanvasLayout from '../../components/canvas-layout';
import Line from '../../components/three-components/line';
import { OrbitControls } from '@react-three/drei';

const ThreeTest = ({ location }) => {

    let camera = { fov: 75, near: 0.1, far: 1000, position: [10, 10, 10] };
    const opts = []

    for (let i = 0; i < 4000; i++) {
        opts.push({
            key: `${i}line`,
            lineWidth: `${i+0.4*2}`,
            start: [`${i+3}`, `${i+10}`, `${i+5}`],
            end: [`${i-10}`, `${i-3}`, `${i-10}`]
        })
    }

    return (
        <CanvasLayout location={location} title="Peralta Media" camera={camera}>
            <OrbitControls />
            <color attach="background" args={["black"]} />
            <ambientLight intensity={0.10} />
            <directionalLight color="white" position={[0, 0, 15]} />

            {opts.map((el) => <Line key={el.key} color={'red'} lineWidth={el.lineWidth} start={el.start} end={el.end} />)}            

        </CanvasLayout>
    )
}

export default ThreeTest;
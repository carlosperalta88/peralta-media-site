import * as React from 'react';
import reactDom from 'react-dom';
import { Canvas } from '@react-three/fiber';
import Layout from './layout';

const CanvasLayout = ({ location, title, children, camera }) => {
    const orbit = React.useRef();

    return (
        <Layout location={location} title={title}>
            <div id="canvas-container">
                <Canvas camera={camera} alpha="false" >
                    {children}
                </Canvas>
            </div>
        </Layout>
    )
}

export default CanvasLayout;
import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import AFrameRenderer from './AFrameRenderer';
import Marker from './Marker';
import Entity from './Entity';
const Example = () => {
    const scene = useRef();
    return (_jsx(AFrameRenderer, Object.assign({ arToolKit: {}, stats: true, getSceneRef: (ref) => (scene.current = ref), autoRestart: true }, { children: _jsx(Marker, Object.assign({ parameters: {
                preset: 'hiro',
            } }, { children: _jsx(Entity, { material: "color: red", "gltf-model": "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf", scale: {
                    x: 0.02,
                    y: 0.02,
                    z: 0.02,
                }, position: {
                    x: 0,
                    y: 0,
                    z: 0,
                }, animation: [
                    {
                        property: 'rotation',
                        to: {
                            x: 0,
                            y: 360,
                            z: 0,
                        },
                        dur: 5000,
                        loop: true,
                    },
                    {
                        property: 'scale',
                        from: {
                            x: 0.02,
                            y: 0.02,
                            z: 0.02,
                        },
                        to: {
                            x: 0.2,
                            y: 0.2,
                            z: 0.2,
                        },
                        dur: 5000,
                        loop: true,
                    },
                ] }, void 0) }), void 0) }), void 0));
};
export default Example;

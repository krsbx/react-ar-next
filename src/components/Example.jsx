import React, { useRef } from 'react';
import AFrameRenderer from './AFrameRenderer';
import Marker from './Marker';
import Entity from './Entity';

const Example = () => {
  const scene = useRef();

  return (
    <div>
      <AFrameRenderer
        arToolKit={{}}
        stats
        getSceneRef={(ref) => (scene.current = ref)}
      >
        <Marker parameters={{ preset: 'hiro' }}>
          <Entity
            material="color: red"
            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
            scale="0.02 0.02 0.02"
            position="0 0 0"
            animation={{
              property: 'rotation',
              to: '0 360 0',
              dur: '5000',
              loop: true,
            }}
          ></Entity>
        </Marker>
      </AFrameRenderer>
    </div>
  );
};

export default Example;

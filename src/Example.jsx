import React, { useRef } from 'react';
import AFrameRenderer from './components/AFrameRenderer';
import Marker from './components/Marker';
import Animation from './components/Animation';
import Entity from './components/Entity';

const App = () => {
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
            position="0 0 -1"
          >
            <Animation
              attribute="rotation"
              to="360 0 0"
              dur="5000"
              easing="linear"
              repeat="indefinite"
            />
          </Entity>
        </Marker>
      </AFrameRenderer>
    </div>
  );
};

export default App;

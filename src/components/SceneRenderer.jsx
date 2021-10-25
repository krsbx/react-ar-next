import React from 'react';
import {
  prepareToolKitParams,
  passSceneRef,
  inherentMode,
} from '../utils/ARToolKitHandler';

const SceneRenderer = ({
  arToolKit,
  getSceneRef,
  inherent,
  renderer,
  children,
  ...rest
}) => {
  return (
    <a-scene
      ref={(sceneRef) => {
        passSceneRef(getSceneRef, sceneRef);
        renderer.current = sceneRef;
      }}
      embedded
      arjs={prepareToolKitParams(arToolKit)}
      {...rest}
    >
      {inherentMode(inherent)}
      {children}
    </a-scene>
  );
};

export default SceneRenderer;

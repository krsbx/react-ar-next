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
        renderer = sceneRef;
      }}
      embedded
      arjs={prepareToolKitParams(arToolKit)}
      {...rest}
    >
      {children}
      {inherentMode(inherent)}
    </a-scene>
  );
};

export default SceneRenderer;

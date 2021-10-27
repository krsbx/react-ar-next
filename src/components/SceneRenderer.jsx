import React from 'react';
import {
  prepareToolKitParams,
  passSceneRef,
  locationMode,
  inherentMode,
} from '../utils/ARToolKitHandler';
import { rendererPropsType } from '../utils/PropChecking';

const SceneRenderer = (props) => {
  const {
    arToolKit,
    getSceneRef,
    inherent,
    geoLocation,
    renderer,
    children,
    ...rest
  } = props;

  return (
    <a-scene
      ref={(sceneRef) => {
        passSceneRef(getSceneRef, sceneRef);
        renderer.current = sceneRef;
      }}
      embedded
      arjs={prepareToolKitParams(arToolKit)}
      {...rest}
      vr-mode-ui="enabled: false"
    >
      {children}
      {inherentMode(inherent)}
      {locationMode(geoLocation)}
    </a-scene>
  );
};

SceneRenderer.propTypes = rendererPropsType;

SceneRenderer.defaultProps = {
  arToolKit: {},
  getSceneRef: () => {},
  inherent: true,
};

export default SceneRenderer;

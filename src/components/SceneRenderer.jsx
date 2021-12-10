import React from 'react';
import {
  prepareToolKitParams,
  passSceneRef,
  locationMode,
} from '../utils/arToolKitHandler';
import { rendererPropType } from '../utils/propChecking';

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

  const arjs = prepareToolKitParams(arToolKit);

  return (
    <a-scene
      ref={(sceneRef) => {
        passSceneRef(getSceneRef, sceneRef);
        renderer.current = sceneRef;
      }}
      embedded
      arjs={arjs}
      {...rest}
      vr-mode-ui="enabled: false"
    >
      {children}
      {locationMode(geoLocation || false)}
    </a-scene>
  );
};

SceneRenderer.propTypes = rendererPropType;

SceneRenderer.defaultProps = {
  arToolKit: {},
  getSceneRef: () => {},
  inherent: true,
};

export default SceneRenderer;

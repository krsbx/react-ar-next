import React from 'react';
import {
  prepareToolKitParams,
  passSceneRef,
  locationMode,
} from '../utils/arToolKitHandler';
import { sceneInterface } from '../utils/componentInterface';

const SceneRenderer: React.FC<sceneInterface> = (props) => {
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
    // @ts-ignore
    <a-scene
      ref={(sceneRef: any) => {
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
      {/*// @ts-ignore*/}
    </a-scene>
  );
};

SceneRenderer.defaultProps = {
  arToolKit: {},
  getSceneRef: () => {},
  inherent: true,
};

export default SceneRenderer;

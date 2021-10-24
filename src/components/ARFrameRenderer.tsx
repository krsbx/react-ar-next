import React, { useEffect } from 'react';
import ARFrameInterface from '../utils/ARFrameInterface';
import {
  inherentToolKitMode,
  prepareToolKitParams,
} from '../utils/ARToolKitHandler';

interface props {
  arToolKit?: ARFrameInterface;
  getSceneRef?: Function;
  inherent?: Boolean;
}

const ARFrameRenderer: React.FC<props> = ({
  arToolKit,
  getSceneRef,
  inherent,
  children,
  ...rest
}) => {
  const container = document.body;
  let renderer = null;

  return (
    <a-scene
      ref={(sceneRef) =>
        passSceneRef(getSceneRef, sceneRef) && (renderer = sceneRef)
      }
      embedded
      arjs={prepareToolKitParams(arToolKit)}
      {...rest}
    >
      {children}
      {inherentToolKitMode(inherent)}
    </a-scene>
  );
};

export default ARFrameRenderer;

import _ from 'lodash';
import React, { useRef } from 'react';
import { renderVirtualComponent } from '../utils/ARToolKitHandler';
import SceneRenderer from './SceneRenderer';
import { rendererPropsType } from '../utils/PropChecking';
import useGesture from '../utils/useGesture';

const AFrameRenderer = (props) => {
  const { gestureHandler } = props;

  const container = document.body;
  const renderer = useRef();

  useGesture(!!gestureHandler && gestureHandler);

  return renderVirtualComponent(
    <SceneRenderer
      {..._.omit(props, ['gestureHandler'])}
      renderer={renderer}
    />,
    container
  );
};

AFrameRenderer.propTypes = rendererPropsType;

AFrameRenderer.defaultProps = {
  arToolKit: {},
  getSceneRef: () => {},
  inherent: true,
};

export default AFrameRenderer;

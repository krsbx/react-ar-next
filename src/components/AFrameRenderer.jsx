import _ from 'lodash';
import React, { useRef } from 'react';
import { renderVirtualComponent } from '../utils/arToolKitHandler';
import SceneRenderer from './SceneRenderer';
import { rendererPropsType } from '../utils/propChecking';
import useGesture from '../utils/useGesture';
import useDistanceSubscriber from '../utils/useDistanceSubscriber';

const AFrameRenderer = (props) => {
  const { gestureHandler } = props;

  const container = document.body;
  const renderer = useRef();

  !!gestureHandler && useGesture(gestureHandler);

  // Add event listner for get distance between marker and camera
  useDistanceSubscriber();

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

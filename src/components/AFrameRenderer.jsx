import React, { useRef } from 'react';
import { renderVirtualComponent } from '../utils/ARToolKitHandler';
import SceneRenderer from './SceneRenderer';
import { rendererPropsType } from '../utils/PropChecking';

const AFrameRenderer = (props) => {
  const container = document.body;
  const renderer = useRef();

  return renderVirtualComponent(
    <SceneRenderer {...props} renderer={renderer} />,
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

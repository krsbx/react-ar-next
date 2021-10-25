import React from 'react';
import { renderVirtualComponent } from '../utils/ARToolKitHandler';
import SceneRenderer from './SceneRenderer';
import { rendererPropsType } from '../utils/PropChecking';

const ARFrameRenderer = ({ ...rest }) => {
  const container = document.body;
  let renderer = null;

  return renderVirtualComponent(
    <SceneRenderer {...rest} renderer={renderer} />,
    container
  );
};

ARFrameRenderer.propTypes = rendererPropsType;

ARFrameRenderer.defaultProps = {
  arToolKit: {},
  getSceneRef: () => {},
  inherent: true,
};

export default ARFrameRenderer;

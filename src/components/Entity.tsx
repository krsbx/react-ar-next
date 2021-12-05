import _ from 'lodash';
import React from 'react';
import { getAnimations } from '../utils/animationHandler';
import { propsConverter } from '../utils/componentHandler';
import { entityInterface } from '../utils/componentInterface';

const Entity: React.FC<entityInterface> = (props) => {
  const animation = props.animation && getAnimations(props.animation);

  return (
    // @ts-ignore
    <a-entity
      {...propsConverter(_.omit(props, ['children', 'animation']))}
      {...animation}
    >
      {props.children}
      {/*// @ts-ignore*/}
    </a-entity>
  );
};

export default Entity;

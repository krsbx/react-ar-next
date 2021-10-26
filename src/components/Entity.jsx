import _ from 'lodash';
import React from 'react';
import { entityPropType } from '../utils/PropChecking';
import { getAnimations } from '../utils/AnimationHandler';

const Entity = (props) => {
  const animation = props.animation && getAnimations(props.animation);

  return (
    <a-entity
      {..._.omit(props, ['children', 'animation'])}
      animation={animation}
    >
      {props.children}
    </a-entity>
  );
};

Entity.propTypes = entityPropType;

export default Entity;

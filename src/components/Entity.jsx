import _ from 'lodash';
import React from 'react';
import { entityPropType } from '../utils/propChecking';
import { getAnimations } from '../utils/animationHandler';
import { propsConverter } from '../utils/componentHandler';

const Entity = (props) => {
  const animation = props.animation && getAnimations(props.animation);

  return (
    <a-entity
      {...propsConverter(_.omit(props, ['children', 'animation']))}
      animation={animation}
    >
      {props.children}
    </a-entity>
  );
};

Entity.propTypes = entityPropType;

export default Entity;

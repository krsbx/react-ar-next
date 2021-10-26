import _ from 'lodash';
import React from 'react';
import { boxPropType } from '../utils/PropChecking';
import { getAnimations } from '../utils/AnimationHandler';

const Box = (props) => {
  const animation = props.animation && getAnimations(props.animation);

  return (
    <a-box {..._.omit(props, ['children', 'animation'])} animation={animation}>
      {props.children}
    </a-box>
  );
};

Box.propTypes = boxPropType;

export default Box;

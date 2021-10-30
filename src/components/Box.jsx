import _ from 'lodash';
import React from 'react';
import { boxPropType } from '../utils/propChecking';
import { getAnimations } from '../utils/animationHandler';
import { propsConverter } from '../utils/componentHandler';

const Box = (props) => {
  const animation = props.animation && getAnimations(props.animation);

  return (
    <a-box
      {...propsConverter(_.omit(props, ['children', 'animation']))}
      animation={animation}
    >
      {props.children}
    </a-box>
  );
};

Box.propTypes = boxPropType;

export default Box;

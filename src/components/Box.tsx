import _ from 'lodash';
import React from 'react';
import { getAnimations } from '../utils/animationHandler';
import { propsConverter } from '../utils/componentHandler';
import { boxInterface } from '../utils/componentInterface';

const Box: React.FC<boxInterface> = (props) => {
  const animation = props.animation && getAnimations(props.animation);

  return (
    // @ts-ignore
    <a-box
      {...propsConverter(_.omit(props, ['children', 'animation']))}
      {...animation}
    >
      {props.children}
      {/*// @ts-ignore*/}
    </a-box>
  );
};

export default Box;

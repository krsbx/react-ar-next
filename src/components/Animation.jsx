import React from 'react';
import { animationPropType } from '../utils/PropChecking';

const Animation = (props) => {
  return <a-animation {...props} />;
};

Animation.propTypes = animationPropType;

export default Animation;

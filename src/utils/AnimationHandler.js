import _ from 'lodash';
import { ANIMATION_PROPERTIES } from './constant';

export const getAnimations = (props) => {
  let animationParams = '';

  _.forEach(props, (value, index) => {
    if (_.includes(ANIMATION_PROPERTIES, index))
      animationParams += `${index}: ${props[index]};`;
  });

  return animationParams;
};

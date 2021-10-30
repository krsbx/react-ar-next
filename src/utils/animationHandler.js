import _ from 'lodash';
import { ANIMATION_PROPERTIES } from './constant';

export const getAnimations = (props) => {
  let animationParams = '';

  _.forEach(props, (value, index) => {
    if (_.includes(ANIMATION_PROPERTIES, index)) {
      const currentData = props[index];

      if (_.isObject(currentData)) {
        animationParams += `${index}: ${_.values(currentData).join(' ')};`;
      } else {
        animationParams += `${index}: ${currentData};`;
      }
    }
  });

  return animationParams;
};

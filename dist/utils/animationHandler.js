import _ from 'lodash';
import { ANIMATION_PROPERTIES } from './constant';
/**
 * Generate animation for a single object
 * @param props animation properties
 * @returns animationParams
 */
const singleAnimationHandler = (props) => {
    let animationParams = '';
    _.forEach(props, (value, index) => {
        if (_.includes(ANIMATION_PROPERTIES, index)) {
            const currentData = props[index];
            if (_.isObject(currentData)) {
                animationParams += `${index}: ${_.values(currentData).join(' ')};`;
            }
            else {
                animationParams += `${index}: ${currentData};`;
            }
        }
    });
    return animationParams;
};
/**
 * Generate animation for objects
 * @param props animation properties
 * @returns animationParams
 */
const multipleAnimationHandler = (props) => {
    let animationParams = [];
    _.forEach(props, (value) => {
        const currentData = value;
        animationParams.push(singleAnimationHandler(currentData));
    });
    let animationObject = {};
    _.forEach(animationParams, (value, index) => {
        const animationName = index === 0 ? 'animation' : `animation__${index + 1}`;
        animationObject[animationName] = value;
    });
    return animationObject;
};
/**
 *
 * @param props
 * @returns animationParams
 */
export const getAnimations = (props) => {
    let animationParams = null;
    if (_.isArray(props)) {
        // Multiple animations
        animationParams = multipleAnimationHandler(props);
    }
    else if (_.isObject(props) && !_.isArray(props)) {
        // Single animations
        animationParams = { animation: singleAnimationHandler(props) };
    }
    return animationParams;
};

import PropTypes from 'prop-types';
import {
  DETECTION_MODE,
  MATRIX_CODE_TYPE,
  SOURCE_TYPE,
  TRACKING_METHOD,
} from './constant';

export const rendererPropsType = {
  arToolKit: PropTypes.exact({
    detectionMode: PropTypes.oneOf(DETECTION_MODE),
    matrixCodeType: PropTypes.instanceOf(MATRIX_CODE_TYPE),
    cameraParametersUrl: PropTypes.string,
    maxDetectionRate: PropTypes.number,

    sourceType: PropTypes.oneOf(SOURCE_TYPE),
    sourceUrl: PropTypes.string,
    sourceHeight: PropTypes.number,
    sourceWidth: PropTypes.number,

    displayHeight: PropTypes.number,
    displayWidth: PropTypes.number,
    canvasHeight: PropTypes.number,
    canvasWidth: PropTypes.number,

    trackingMethod: PropTypes.oneOf(TRACKING_METHOD),
    debugUIEnabled: PropTypes.bool,
  }),
  getSceneRef: PropTypes.func,
  inherent: PropTypes.bool,
};

export const animationPropType = {
  attribute: PropTypes.string,
  to: PropTypes.string,
  dur: PropTypes.string,
  easing: PropTypes.string,
  repeat: PropTypes.string,
};

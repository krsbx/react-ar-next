import _ from 'lodash';
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
  stats: PropTypes.bool,
};

export const animationPropType = {
  attribute: PropTypes.string,
  to: PropTypes.string,
  dur: PropTypes.string,
  easing: PropTypes.string,
  repeat: PropTypes.string,
};

export const markerPropType = {
  parameters: PropTypes.shape({
    type: PropTypes.string,
    size: PropTypes.number,
    patternUrl: PropTypes.string,
    url: PropTypes.string,
    barcodeValue: PropTypes.number,
    changeMatrixMode: PropTypes.string,
    minConfidence: PropTypes.number,
    preset: PropTypes.string,
    markerhelpers: PropTypes.bool,
    'hit-testing-enabled': PropTypes.bool,
    'hit-testing-renderDebug': PropTypes.bool,
  }),
  inherent: PropTypes.bool,
};

export const boxPropType = {
  color: PropTypes.string,
  material: PropTypes.string,
  position: PropTypes.string,
  scale: PropTypes.string,
};

export const entityPropType = _.assign(boxPropType, {
  'gltf-model': PropTypes.string,
  geometry: PropTypes.string,
});

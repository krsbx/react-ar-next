import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  ANIMATION_DIRECTIONS,
  ANIMATION_EASING,
  DETECTION_MODE,
  MARKER_PRESET,
  MARKER_TYPE,
  MATRIX_CODE_TYPE,
  SOURCE_TYPE,
  TRACKING_METHOD,
} from './constant';

export const GESTURE_PARAMETER = {
  oneFinger: PropTypes.func, // Usually for rotating
  twoFinger: PropTypes.func, // Usually for scaling/zooming
  threeFinger: PropTypes.func, // Custom functions as you want
  fourFinger: PropTypes.func, // Have fun with this one
};

export const rendererPropsType = {
  arToolKit: PropTypes.shape({
    detectionMode: PropTypes.oneOf(DETECTION_MODE),
    matrixCodeType: PropTypes.oneOf(MATRIX_CODE_TYPE),
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
  geoLocation: PropTypes.bool,
  inherent: PropTypes.bool,
  stats: PropTypes.bool,
  'gesture-detector': PropTypes.bool,
  gestureHandler: PropTypes.shape(GESTURE_PARAMETER),
};

export const animationPropType = {
  property: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  delay: PropTypes.number,
  dir: PropTypes.oneOf(ANIMATION_DIRECTIONS),
  dur: PropTypes.string,
  easing: PropTypes.oneOf(ANIMATION_EASING),
  elasticity: PropTypes.number,
  loop: PropTypes.bool,
  round: PropTypes.bool,
  autoplay: PropTypes.bool,
  enabled: PropTypes.bool,
};

export const markerPropType = {
  parameters: PropTypes.shape({
    type: PropTypes.oneOf(MARKER_TYPE),
    size: PropTypes.number,
    patternUrl: PropTypes.string,
    url: PropTypes.string,
    barcodeValue: PropTypes.number,
    changeMatrixMode: PropTypes.string,
    minConfidence: PropTypes.number,
    preset: PropTypes.oneOf(MARKER_PRESET),
    markerhelpers: PropTypes.bool,
    'hit-testing-enabled': PropTypes.bool,
    'hit-testing-renderDebug': PropTypes.bool,
    smoothCount: PropTypes.number,
    smoothTolerance: PropTypes.number,
    smoothThreshold: PropTypes.number,
  }),
  onMarkerFound: PropTypes.func,
  onMarkerLost: PropTypes.func,
  inherent: PropTypes.bool,
};

export const boxPropType = {
  color: PropTypes.string,
  material: PropTypes.string,
  position: PropTypes.string,
  scale: PropTypes.string,
  animation: PropTypes.shape(animationPropType),
  'gps-entity-place': PropTypes.string,
};

export const entityPropType = _.assign(boxPropType, {
  'gltf-model': PropTypes.string,
  geometry: PropTypes.string,
});

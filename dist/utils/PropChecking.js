"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textPropType = exports.rendererPropType = exports.markerPropType = exports.entityPropType = exports.boxPropType = exports.axisPropType = exports.animationPropType = exports.aframeRenderPropType = exports.GESTURE_PARAMETER = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constant = require("./constant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GESTURE_PARAMETER = {
  oneFinger: _propTypes.default.func,
  // Usually for rotating
  twoFinger: _propTypes.default.func,
  // Usually for scaling/zooming
  threeFinger: _propTypes.default.func,
  // Custom functions as you want
  fourFinger: _propTypes.default.func // Have fun with this one

};
exports.GESTURE_PARAMETER = GESTURE_PARAMETER;
var rendererPropType = {
  arToolKit: _propTypes.default.shape({
    detectionMode: _propTypes.default.oneOf(_constant.DETECTION_MODE),
    matrixCodeType: _propTypes.default.oneOf(_constant.MATRIX_CODE_TYPE),
    cameraParametersUrl: _propTypes.default.string,
    maxDetectionRate: _propTypes.default.number,
    sourceType: _propTypes.default.oneOf(_constant.SOURCE_TYPE),
    sourceUrl: _propTypes.default.string,
    sourceHeight: _propTypes.default.number,
    sourceWidth: _propTypes.default.number,
    displayHeight: _propTypes.default.number,
    displayWidth: _propTypes.default.number,
    canvasHeight: _propTypes.default.number,
    canvasWidth: _propTypes.default.number,
    trackingMethod: _propTypes.default.oneOf(_constant.TRACKING_METHOD),
    debugUIEnabled: _propTypes.default.bool
  }),
  getSceneRef: _propTypes.default.func,
  geoLocation: _propTypes.default.bool,
  inherent: _propTypes.default.bool,
  stats: _propTypes.default.bool,
  'gesture-detector': _propTypes.default.bool,
  gestureHandler: _propTypes.default.shape(GESTURE_PARAMETER)
};
exports.rendererPropType = rendererPropType;

var aframeRenderPropType = _lodash.default.assign(rendererPropType, {
  onError: _propTypes.default.func,
  onInit: _propTypes.default.func
});

exports.aframeRenderPropType = aframeRenderPropType;

var axisPropType = _propTypes.default.shape({
  x: _propTypes.default.number,
  y: _propTypes.default.number,
  z: _propTypes.default.number
});

exports.axisPropType = axisPropType;
var animationPropType = {
  property: _propTypes.default.string,
  from: _propTypes.default.oneOfType([axisPropType, _propTypes.default.string]),
  to: _propTypes.default.oneOfType([axisPropType, _propTypes.default.string]),
  delay: _propTypes.default.number,
  dir: _propTypes.default.oneOf(_constant.ANIMATION_DIRECTIONS),
  dur: _propTypes.default.number,
  easing: _propTypes.default.oneOf(_constant.ANIMATION_EASING),
  elasticity: _propTypes.default.number,
  loop: _propTypes.default.bool,
  round: _propTypes.default.bool,
  autoplay: _propTypes.default.bool,
  enabled: _propTypes.default.bool
};
exports.animationPropType = animationPropType;
var markerPropType = {
  parameters: _propTypes.default.shape({
    type: _propTypes.default.oneOf(_constant.MARKER_TYPE),
    size: _propTypes.default.number,
    patternUrl: _propTypes.default.string,
    url: _propTypes.default.string,
    barcodeValue: _propTypes.default.number,
    changeMatrixMode: _propTypes.default.string,
    minConfidence: _propTypes.default.number,
    preset: _propTypes.default.oneOf(_constant.MARKER_PRESET),
    markerhelpers: _propTypes.default.bool,
    'hit-testing-enabled': _propTypes.default.bool,
    'hit-testing-renderDebug': _propTypes.default.bool,
    smoothCount: _propTypes.default.number,
    smoothTolerance: _propTypes.default.number,
    smoothThreshold: _propTypes.default.number
  }),
  onMarkerFound: _propTypes.default.func,
  onMarkerLost: _propTypes.default.func,
  inherent: _propTypes.default.bool
};
exports.markerPropType = markerPropType;

var animationProperties = _propTypes.default.shape(animationPropType);

var arrayOfAnmation = _propTypes.default.arrayOf(animationProperties);

var boxPropType = {
  color: _propTypes.default.string,
  material: _propTypes.default.string,
  position: axisPropType,
  scale: axisPropType,
  rotation: axisPropType,
  animation: _propTypes.default.oneOfType([arrayOfAnmation, animationProperties]),
  'gps-entity-place': _propTypes.default.string
};
exports.boxPropType = boxPropType;

var entityPropType = _lodash.default.assign(boxPropType, {
  'gltf-model': _propTypes.default.string,
  geometry: _propTypes.default.string,
  visible: _propTypes.default.bool
});

exports.entityPropType = entityPropType;
var textPropType = {
  align: _propTypes.default.oneOf(_constant.TEXT_ALIGN),
  'alpha-test': _propTypes.default.number,
  anchor: _propTypes.default.oneOf(_constant.TEXT_ANCHOR),
  baseline: _propTypes.default.oneOf(_constant.TEXT_BASE_LINE),
  color: _propTypes.default.string,
  font: _propTypes.default.string,
  'font-image': _propTypes.default.string,
  height: _propTypes.default.number,
  'letter-spacing': _propTypes.default.number,
  'line-height': _propTypes.default.number,
  opacity: _propTypes.default.number,
  rotation: axisPropType,
  shader: _propTypes.default.string,
  side: _propTypes.default.oneOf(_constant.TEXT_SIDE),
  'tab-size': _propTypes.default.number,
  transparent: _propTypes.default.bool,
  value: _propTypes.default.string,
  'white-space': _propTypes.default.oneOf(_constant.TEXT_WHITESPACE),
  width: _propTypes.default.number,
  'wrap-count': _propTypes.default.number,
  'wrap-pixels': _propTypes.default.number,
  'z-offset': _propTypes.default.number
};
exports.textPropType = textPropType;
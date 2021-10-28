"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRACKING_METHOD = exports.SOURCE_TYPE = exports.PARAMETERS = exports.MATRIX_CODE_TYPE = exports.MARKER_TYPE = exports.MARKER_PRESET = exports.DETECTION_MODE = exports.ANIMATION_PROPERTIES = exports.ANIMATION_EASING = exports.ANIMATION_DIRECTIONS = void 0;
var PARAMETERS = [// Core config
'detectionMode', 'matrixCodeType', 'cameraParametersUrl', 'maxDetectionRate', // Source configuration
'sourceType', 'sourceUrl', 'sourceWidth', 'sourceHeight', // Canvas dimensions
'displayHeight', 'displayWidth', 'canvasWidth', 'canvasHeight', // Tracking module ['tango', 'artoolkit', 'best']
'trackingMethod', 'areaLearningButton', 'performanceProfile', 'tangoPointCloudEnabled', 'debugUIEnabled'];
exports.PARAMETERS = PARAMETERS;
var SOURCE_TYPE = ['webcam', 'image', 'video'];
exports.SOURCE_TYPE = SOURCE_TYPE;
var DETECTION_MODE = ['color', 'color_and_matrix', 'mono', 'mono_and_matrix'];
exports.DETECTION_MODE = DETECTION_MODE;
var MATRIX_CODE_TYPE = ['3x3', '3x3_HAMMING63', '3x3_PARITY65', '4x4', '4x4_BCH_13_9_3', '4x4_BCH_13_5_5'];
exports.MATRIX_CODE_TYPE = MATRIX_CODE_TYPE;
var TRACKING_METHOD = ['tango', 'artoolkit', 'best'];
exports.TRACKING_METHOD = TRACKING_METHOD;
var MARKER_TYPE = ['pattern', 'barcode', 'unknown'];
exports.MARKER_TYPE = MARKER_TYPE;
var MARKER_PRESET = ['hiro', 'kanji', 'custom'];
exports.MARKER_PRESET = MARKER_PRESET;
var ANIMATION_DIRECTIONS = ['normal', 'alternate', 'reverse'];
exports.ANIMATION_DIRECTIONS = ANIMATION_DIRECTIONS;
var ANIMATION_EASING = ['easeInQuad', 'easeOutQuad', 'easeInOutQuad,', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic', 'linear'];
exports.ANIMATION_EASING = ANIMATION_EASING;
var ANIMATION_PROPERTIES = ['property', 'isRawProperty', 'from', 'to', 'type', 'delay', 'dir', 'dur', 'easing', 'elasticity', 'loop', 'round', 'startEvents', 'pauseEvents', 'resumeEvents', 'autoplay', 'enabled'];
exports.ANIMATION_PROPERTIES = ANIMATION_PROPERTIES;
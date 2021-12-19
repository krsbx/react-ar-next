import _ from 'lodash';
export const PARAMETERS = [
    // Core config
    'detectionMode',
    'matrixCodeType',
    'cameraParametersUrl',
    'maxDetectionRate',
    // Source configuration
    'sourceType',
    'sourceUrl',
    'sourceWidth',
    'sourceHeight',
    // Canvas dimensions
    'displayHeight',
    'displayWidth',
    'canvasWidth',
    'canvasHeight',
    // Tracking module ['tango', 'artoolkit', 'best']
    'trackingMethod',
    'areaLearningButton',
    'performanceProfile',
    'tangoPointCloudEnabled',
    'debugUIEnabled',
];
export const SOURCE_TYPE = ['webcam', 'image', 'video'];
export const DETECTION_MODE = [
    'color',
    'color_and_matrix',
    'mono',
    'mono_and_matrix',
];
export const MATRIX_CODE_TYPE = [
    '3x3',
    '3x3_HAMMING63',
    '3x3_PARITY65',
    '4x4',
    '4x4_BCH_13_9_3',
    '4x4_BCH_13_5_5',
];
export const TRACKING_METHOD = ['tango', 'artoolkit', 'best'];
export const MARKER_TYPE = ['pattern', 'barcode', 'unknown'];
export const MARKER_PRESET = ['hiro', 'kanji'];
export const ANIMATION_DIRECTIONS = ['normal', 'alternate', 'reverse'];
export const ANIMATION_EASING = [
    'easeInQuad',
    'easeOutQuad',
    'easeInOutQuad,',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'linear',
];
export const ANIMATION_PROPERTIES = [
    'property',
    'isRawProperty',
    'from',
    'to',
    'type',
    'delay',
    'dir',
    'dur',
    'easing',
    'elasticity',
    'loop',
    'round',
    'startEvents',
    'pauseEvents',
    'resumeEvents',
    'autoplay',
    'enabled',
];
export const TEXT_PROPERTIES = [
    'align',
    'alpha-test',
    'anchor',
    'baseline',
    'color',
    'font',
    'font-image',
    'height',
    'letter-spacing',
    'line-height',
    'rotation',
    'opacity',
    'shader',
    'side',
    'tab-size',
    'transparent',
    'value',
    'white-space',
    'width',
    'wrap-count',
    'wrap-pixels',
    'z-offset',
];
export const TEXT_ALIGN = ['left', 'center', 'right'];
export const TEXT_ANCHOR = _.concat(TEXT_ALIGN, ['align']);
export const TEXT_BASE_LINE = ['top', 'center', 'bottom'];
export const TEXT_SIDE = ['front', 'back', 'double'];
export const TEXT_WHITESPACE = ['normal', 'pre', 'nowrap'];

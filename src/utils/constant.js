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

interface arToolKitInterface {
  sourceType?: 'webcam' | 'image' | 'video';
  sourceUrl?: String;
  sourceHeight?: Number;
  sourceWidth?: Number;
  displayHeight?: Number;
  displayWidth?: Number;
  debugUIEnabled?: Boolean;
  detectionMode?: 'color' | 'color_and_matrix' | 'mono' | 'mono_and_matrix';
  matrixCodeType?:
    | '3x3'
    | '3x3_HAMMING63'
    | '3x3_PARITY65'
    | '4x4'
    | '4x4_BCH_13_9_3'
    | '4x4_BCH_13_5_5';
  cameraParametersUrl?: String;
  maxDetectionRate?: Number;
  canvasWidth?: Number;
  canvasHeight?: Number;
}

export default arToolKitInterface;

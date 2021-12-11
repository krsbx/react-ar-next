import React from 'react';

export interface axisInterface {
  x: number;
  y: number;
  z: number;
}

export interface arProviderInterface {
  windowSize?: { height: number; width: number };
  isVisible: Boolean;
  setIsVisible?: React.Dispatch<boolean>;
  distance: React.MutableRefObject<any>;
  markerRef?: React.MutableRefObject<any>;
  cameraRef?: React.MutableRefObject<any>;
}

export interface markerParameterInterface {
  type?: 'pattern' | 'barcode' | 'unknown';
  size?: number;
  url?: string;
  value?: number;
  changeMatrixMode?: string;
  minConfidence?: number;
  preset?: 'hiro' | 'kanji';
  markerhelpers?: boolean;
  'hit-testing-enabled'?: boolean;
  'hit-testing-renderDebug'?: boolean;
  smoothCount?: number;
  smoothTolerance?: number;
  smoothThreshold?: number;
}

export interface markerInterface {
  onMarkerFound?: Function;
  onMarkerLost?: Function;
  parameters?: markerParameterInterface;
  inherent?: boolean;
}

export interface arToolkitInterface {
  detectionMode?: 'color' | 'color_and_matrix' | 'mono' | 'mono_and_matrix';
  matrixCodeType?:
    | '3x3'
    | '3x3_HAMMING63'
    | '3x3_PARITY65'
    | '4x4'
    | '4x4_BCH_13_9_3'
    | '4x4_BCH_13_5_5';
  cameraParametersUrl?: string;
  maxDetectionRate?: number;

  sourceType?: 'webcam' | 'image' | 'video';
  sourceUrl?: string;
  sourceHeight?: number;
  sourceWidth?: number;

  displayHeight?: number;
  displayWidth?: number;
  canvasHeight?: number;
  canvasWidth?: number;

  trackingMethod?: 'tango' | 'artoolkit' | 'best';
  debugUIEnabled?: boolean;
}

export interface gestureInterface {
  oneFinger?: Function; // Usually for rotating
  twoFinger?: Function; // Usually for scaling/zooming
  threeFinger?: Function; // Custom functions as you want
  fourFinger?: Function;
}

export interface rendererInterface {
  arToolKit?: arToolkitInterface;
  getSceneRef?: Function;
  geoLocation?: boolean;
  inherent?: boolean;
  stats?: boolean;
  'gesture-detector'?: boolean;
  gestureHandler?: gestureInterface;
  onError?: Function;
  onInit?: Function;
  autoRestart?: boolean;
}

export interface sceneInterface extends rendererInterface {
  renderer: any;
}

export interface animationInterface {
  property?: string;
  from?: axisInterface | string;
  to?: axisInterface | string;
  delay?: number;
  dir?: 'normal' | 'alternate' | 'reverse';
  dur?: number;
  easing?:
    | 'easeInQuad'
    | 'easeOutQuad'
    | 'easeInOutQuad|'
    | 'easeInCubic'
    | 'easeOutCubic'
    | 'easeInOutCubic'
    | 'easeInQuart'
    | 'easeOutQuart'
    | 'easeInOutQuart'
    | 'easeInQuint'
    | 'easeOutQuint'
    | 'easeInOutQuint'
    | 'easeInSine'
    | 'easeOutSine'
    | 'easeInOutSine'
    | 'easeInExpo'
    | 'easeOutExpo'
    | 'easeInOutExpo'
    | 'easeInCirc'
    | 'easeOutCirc'
    | 'easeInOutCirc'
    | 'easeInBack'
    | 'easeOutBack'
    | 'easeInOutBack'
    | 'easeInElastic'
    | 'easeOutElastic'
    | 'easeInOutElastic'
    | 'linear';
  elasticity?: number;
  loop?: boolean;
  round?: boolean;
  autoplay?: boolean;
  enabled?: boolean;
}

export interface boxInterface {
  color?: string;
  material?: string;
  position?: axisInterface;
  scale?: axisInterface;
  rotation?: axisInterface;
  animation?: animationInterface | animationInterface[];
  'gps-entity-place'?: string;
}

export interface entityInterface extends boxInterface {
  'gltf-model'?: string;
  geometry?: string;
  visible?: boolean;
}

export interface textInterface {
  align: 'left' | 'center' | 'right';
  'alpha-test': number;
  anchor: 'left' | 'center' | 'right' | 'align';
  baseline: 'top' | 'center' | 'bottom';
  color: string;
  font: string;
  'font-image': string;
  height: number;
  'letter-spacing': number;
  'line-height': number;
  opacity: number;
  rotation: axisInterface;
  shader: string;
  side: 'front' | 'back' | 'double';
  'tab-size': number;
  transparent: boolean;
  value: string;
  'white-space': 'normal' | 'pre' | 'nowrap';
  width: number;
  'wrap-count': number;
  'wrap-pixels': number;
  'z-offset': number;
}

export type onCompleteType = (pathName: string) => void;

export interface IMarkerTraining {
  mainContainer: React.RefObject<HTMLCanvasElement>;
  imageContainer: React.RefObject<HTMLImageElement>;
}

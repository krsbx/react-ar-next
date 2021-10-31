import React from 'react';

declare module 'react-ar-next' {
  interface aRProviderInterface {
    windowSize?: { height: Number; width: Number };
    isVisible?: Boolean;
    setIsVisible?: React.Dispatch<boolean>;
    markerRef?: React.MutableRefObject<any>;
    cameraRef?: React.MutableRefObject<any>;
  }

  interface markerParameterInterface {
    type?: 'pattern' | 'barcode' | 'unknown';
    size?: Number;
    patternUrl?: String;
    url?: String;
    barcodeValue?: Number;
    changeMatrixMode?: String;
    minConfidence?: Number;
    preset?: 'hiro' | 'kanji' | 'custom';
    markerhelpers?: Boolean;
    'hit-testing-enabled'?: Boolean;
    'hit-testing-renderDebug'?: Boolean;
    smoothCount?: Number;
    smoothTolerance?: Number;
    smoothThreshold?: Number;
  }

  interface markerInterface {
    onMarkerFound?: Function;
    onMarkerLost?: Function;
    parameters?: markerParameterInterface;
    inherent?: boolean;
  }

  interface arToolkitInterface {
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

    sourceType?: 'webcam' | 'image' | 'video';
    sourceUrl?: String;
    sourceHeight?: Number;
    sourceWidth?: Number;

    displayHeight?: Number;
    displayWidth?: Number;
    canvasHeight?: Number;
    canvasWidth?: Number;

    trackingMethod?: 'tango' | 'artoolkit' | 'best';
    debugUIEnabled?: Boolean;
  }

  interface gestureInterface {
    oneFinger?: Function; // Usually for rotating
    twoFinger?: Function; // Usually for scaling/zooming
    threeFinger?: Function; // Custom functions as you want
    fourFinger?: Function;
  }

  interface rendererInterface {
    arToolKit?: arToolkitInterface;
    getSceneRef?: Function;
    geoLocation?: Boolean;
    inherent?: Boolean;
    stats?: Boolean;
    'gesture-detector'?: Boolean;
    gestureHandler?: gestureInterface;
  }

  interface sceneInterface extends rendererInterface {
    renderer: any;
  }

  interface axisInterface {
    x: Number;
    y: Number;
    z: Number;
  }

  interface animationInterface {
    property?: String;
    from?: axisInterface | String;
    to?: axisInterface | String;
    delay?: Number;
    dir?: 'normal' | 'alternate' | 'reverse';
    dur?: Number;
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
    elasticity?: Number;
    loop?: Boolean;
    round?: Boolean;
    autoplay?: Boolean;
    enabled?: Boolean;
  }

  interface boxInterface {
    color?: string;
    material?: string;
    position?: axisInterface;
    scale?: axisInterface;
    rotation?: axisInterface;
    animation?: animationInterface | animationInterface[];
    'gps-entity-place'?: string;
  }

  interface entityInterface extends boxInterface {
    'gltf-model'?: string;
    geometry?: string;
    visible?: boolean;
  }

  interface textInterface {
    align?: 'left' | 'center' | 'right';
    'alpha-test'?: Number;
    anchor?: 'left' | 'center' | 'right' | 'align';
    baseline?: 'top' | 'center' | 'bottom';
    color?: String;
    font?: String;
    'font-image'?: String;
    height?: Number;
    'letter-spacing'?: Number;
    'line-height'?: Number;
    opacity?: Number;
    rotation?: axisInterface;
    shader?: String;
    side?: 'front' | 'back' | 'double';
    'tab-size'?: Number;
    transparent?: Boolean;
    value?: String;
    'white-space'?: 'normal' | 'pre' | 'nowrap';
    width?: Number;
    'wrap-count'?: Number;
    'wrap-pixels'?: Number;
    'z-offset'?: Number;
  }

  class AFrameRenderer extends React.Component<rendererInterface, any> {}
  class ARProvider extends React.Component<any, any> {}
  class Box extends React.Component<boxInterface, any> {}
  class Entity extends React.Component<entityInterface, any> {}
  class Example extends React.Component<any, any> {}
  class Marker extends React.Component<markerInterface, any> {}
  class SceneRenderer extends React.Component<sceneInterface, any> {}
  class Text extends React.Component<textInterface, any> {}

  function useARCamera(): any;
  function useARDistance(): Number;
  function useARMarker(): any;
}

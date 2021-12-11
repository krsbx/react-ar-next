import React from 'react';
import {
  arProviderInterface,
  boxInterface,
  entityInterface,
  IMarkerTraining,
  markerInterface,
  onCompleteType,
  rendererInterface,
  sceneInterface,
  textInterface,
} from './src/utils/componentInterface';

declare module 'react-ar-next' {
  class AFrameRenderer extends React.Component<rendererInterface, any> {}
  class ARProvider extends React.Component<any, any> {}
  class Box extends React.Component<boxInterface, any> {}
  class Entity extends React.Component<entityInterface, any> {}
  class Example extends React.Component<any, any> {}
  class ExampleMarkerGenerator extends React.Component<any, any> {}
  class Marker extends React.Component<markerInterface, any> {}
  class SceneRenderer extends React.Component<sceneInterface, any> {}
  class Text extends React.Component<textInterface, any> {}

  function useARCamera(): any;
  function useARDistance(): Number;
  function useARMarker(): any;
  function useARProvider(): arProviderInterface;
  function MarkerTrainer(referencer: IMarkerTraining): {
    isHexColor: boolean;
    buildMarker: (
      referencer: IMarkerTraining
    ) => (
      innerImageURL: string,
      ratio: number,
      size: number,
      color: string,
      onComplete: onCompleteType
    ) => void;
    updateFullMarkerImage: (
      referencer: IMarkerTraining
    ) => (
      ratio: number,
      size: number,
      color: string,
      marker: string,
      onComplete: onCompleteType
    ) => void;
    loadImage: (markerURI: string) => Promise<string>;
    generatePattern: (markerURI: string) => Promise<string>;
    generateImageFile: (markerURI: string, fileName: string) => void;
    triggerDownload: (patternFileString: string, fileName: string) => void;
  };
}

import { IMarkerTraining, onCompleteType } from './componentInterface';
declare const MarkerTrainer: (referencer: IMarkerTraining) => {
    isHexColor: (color: string) => boolean;
    loadImage: (dataURI: string) => Promise<HTMLImageElement>;
    generatePattern: (markerURI: string) => Promise<string>;
    triggerDownload: (patternFileString: string, fileName?: string) => void;
    generateImageFile: (markerURI: string, fileName?: string) => void;
    buildMarker: (innerImageURL: string, ratio: number, size: number, color: string, onComplete: onCompleteType) => void;
    updateFullMarkerImage: (ratio: number, size: number, color: string, marker: string, onComplete: onCompleteType) => void;
};
export default MarkerTrainer;

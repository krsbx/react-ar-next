import React from 'react';
export declare const ARContext: React.Context<{
    windowSize: {
        width: number;
        height: number;
    };
    isVisible: boolean;
    setIsVisible: (newValue?: boolean | undefined) => void;
    distance: undefined;
    markerRef: undefined;
    cameraRef: undefined;
}>;
declare const ARProvider: React.FC;
export declare const useARProvider: () => {
    windowSize: {
        width: number;
        height: number;
    };
    isVisible: boolean;
    setIsVisible: (newValue?: boolean | undefined) => void;
    distance: undefined;
    markerRef: undefined;
    cameraRef: undefined;
};
export default ARProvider;

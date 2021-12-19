import { ReactNode } from 'react';
/**
 * Generate AR Toolkit parameters from the given parameters
 * @param parameters arToolKit parameters
 * @returns toolKitParams
 */
export declare const prepareToolKitParams: (parameters?: Record<string, any> | undefined) => string;
export declare const passSceneRef: (getSceneRef: any, ref: any) => any;
/**
 * Generate AR Camera
 * @param isGeolocation
 * @returns AR camera
 */
export declare const locationMode: (isGeolocation: boolean) => JSX.Element;
export declare const renderVirtualComponent: (component: ReactNode, container: HTMLElement) => import("react").ReactPortal;

import _ from 'lodash';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { PARAMETERS } from './constant';

/**
 * Generate AR Toolkit parameters from the given parameters
 * @param parameters arToolKit parameters
 * @returns toolKitParams
 */
export const prepareToolKitParams = (parameters?: Record<string, any>) => {
  let toolKitParams = '';

  if (parameters) {
    _.forEach(parameters, (value, index) => {
      if (_.includes(PARAMETERS, index))
        toolKitParams += `${index}: ${parameters[index]};`;
    });
  }

  return toolKitParams;
};

export const passSceneRef = (getSceneRef: any, ref: any) =>
  getSceneRef(ref) || ref;

const cameraId = 'react-ar-next-camera';

/**
 * Generate AR Camera
 * @param isGeolocation
 * @returns AR camera
 */
export const locationMode = (isGeolocation: boolean) =>
  isGeolocation ? (
    // @ts-ignore
    <a-camera gps-camera rotation-reader id={cameraId}></a-camera>
  ) : (
    // @ts-ignore
    <a-entity camera position="0 1.6 0" id={cameraId}></a-entity>
  );

export const renderVirtualComponent = (
  component: ReactNode,
  container: HTMLElement
) => ReactDOM.createPortal(component, container);

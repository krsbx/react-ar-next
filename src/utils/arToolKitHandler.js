import _ from 'lodash';
import ReactDOM from 'react-dom';
import { PARAMETERS } from './constant';

/**
 * Generate AR Toolkit parameters from the given parameters
 * @param {object} parameters arToolKit parameters
 * @returns {string} toolKitParams
 */
export const prepareToolKitParams = (parameters) => {
  let toolKitParams = '';

  if (parameters) {
    _.forEach(parameters, (value, index) => {
      if (_.includes(PARAMETERS, index))
        toolKitParams += `${index}: ${parameters[index]};`;
    });
  }

  return toolKitParams;
};

export const passSceneRef = (getSceneRef, ref) => getSceneRef(ref) || ref;

const cameraId = 'react-ar-next-camera';

/**
 * Generate AR Camera
 * @param {boolean} isGeolocation
 * @returns {JSX.Element} AR camera
 */
export const locationMode = (isGeolocation) =>
  isGeolocation ? (
    <a-camera gps-camera rotation-reader id={cameraId}></a-camera>
  ) : (
    <a-entity camera position="0 1.6 0" id={cameraId}></a-entity>
  );

export const renderVirtualComponent = (component, container) =>
  ReactDOM.createPortal(component, container);

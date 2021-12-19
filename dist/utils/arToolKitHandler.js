import { jsx as _jsx } from "react/jsx-runtime";
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { PARAMETERS } from './constant';
/**
 * Generate AR Toolkit parameters from the given parameters
 * @param parameters arToolKit parameters
 * @returns toolKitParams
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
 * @param isGeolocation
 * @returns AR camera
 */
export const locationMode = (isGeolocation) => isGeolocation ? (
// @ts-ignore
_jsx("a-camera", { "gps-camera": true, "rotation-reader": true, id: cameraId }, void 0)) : (
// @ts-ignore
_jsx("a-entity", { camera: true, position: "0 1.6 0", id: cameraId }, void 0));
export const renderVirtualComponent = (component, container) => ReactDOM.createPortal(component, container);

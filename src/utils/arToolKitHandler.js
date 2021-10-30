import _ from 'lodash';
import ReactDOM from 'react-dom';
import { PARAMETERS } from './constant';

export const prepareToolKitParams = (parameters) => {
  let toolKitParams = '';

  _.forEach(parameters, (value, index) => {
    if (_.includes(PARAMETERS, index))
      toolKitParams += `${index}: ${parameters[index]};`;
  });

  return toolKitParams;
};

export const passSceneRef = (getSceneRef, ref) => getSceneRef(ref) || ref;

export const locationMode = (value) =>
  value ? (
    <a-camera gps-camera rotation-reader id={'react-ar-next-camera'}></a-camera>
  ) : (
    <a-entity camera position="0 1.6 0" id={'react-ar-next-camera'}></a-entity>
  );

export const renderVirtualComponent = (component, container) =>
  ReactDOM.createPortal(component, container);

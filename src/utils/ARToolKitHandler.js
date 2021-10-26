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

export const inherentMode = (value) => (value ? <a-camera-static /> : null);

export const renderVirtualComponent = (component, container) =>
  ReactDOM.createPortal(component, container);

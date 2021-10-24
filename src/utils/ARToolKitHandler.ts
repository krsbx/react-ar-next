import ArToolKitInterface from './ARFrameInterface';
import { PARAMETERS } from './constant';
import {} from '@ar-js-org/ar.js';

export const prepareToolKitParams = (
  parameters: Record<string, ArToolKitInterface>
) => {
  let toolKitParams = '';

  Object.keys(parameters).forEach((param) => {
    if (PARAMETERS.includes(param)) {
      toolKitParams += `${param}: ${parameters[param]};`;
    }
  });

  return toolKitParams;
};

export const inherentToolKitMode = (value: Boolean) =>
  value ? <a-camera-static /> : null;

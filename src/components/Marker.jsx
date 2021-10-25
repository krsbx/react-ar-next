import React from 'react';
import { isCustomMarker } from '../utils/MarkerHandler';
import { markerPropType } from '../utils/PropChecking';

const Marker = ({ parameters, inherent, children }) => {
  isCustomMarker(parameters);

  return inherent ? (
    <a-marker {...parameters}>{children}</a-marker>
  ) : (
    <a-marker-camera {...parameters}>{children}</a-marker-camera>
  );
};

Marker.propTypes = markerPropType;

Marker.defaultProps = {
  parameters: {},
  inherent: true,
};

export default Marker;

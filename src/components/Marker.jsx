import React, { useRef } from 'react';
import { isCustomMarker } from '../utils/MarkerHandler';
import { markerPropType } from '../utils/PropChecking';
import { useEventListener } from 'krsbx-hooks';

const Marker = ({
  parameters,
  onMarkerFound,
  onMarkerLost,
  inherent,
  children,
}) => {
  isCustomMarker(parameters);

  const markerRef = useRef();

  useEventListener('markerFound', onMarkerFound, markerRef.current);
  useEventListener('markerLost', onMarkerLost, markerRef.current);

  return inherent ? (
    <a-marker {...parameters} ref={markerRef}>
      {children}
    </a-marker>
  ) : (
    <a-marker-camera {...parameters} ref={markerRef}>
      {children}
    </a-marker-camera>
  );
};

Marker.propTypes = markerPropType;

Marker.defaultProps = {
  parameters: {},
  inherent: true,
};

export default Marker;

import React, { useRef } from 'react';
import { isCustomMarker } from '../utils/MarkerHandler';
import { markerPropType } from '../utils/PropChecking';
import { useEventListener } from 'krsbx-hooks';
import { useARProvider } from './ARProvider';

const Marker = ({
  parameters,
  onMarkerFound,
  onMarkerLost,
  inherent,
  children,
}) => {
  const { setIsVisible, markerRef } = useARProvider();

  isCustomMarker(parameters);

  useEventListener(
    'markerFound',
    () => {
      !!onMarkerFound && onMarkerFound();
      setIsVisible(true);
    },
    markerRef.current
  );
  useEventListener(
    'markerLost',
    () => {
      !!onMarkerLost && onMarkerLost();
      setIsVisible(false);
    },
    markerRef.current
  );

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

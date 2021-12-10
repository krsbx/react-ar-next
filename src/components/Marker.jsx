import React, { useRef } from 'react';
import { markerPropType } from '../utils/propChecking';
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
  const thisMarkerRef = useRef();

  useEventListener(
    'markerFound',
    () => {
      !!onMarkerFound && onMarkerFound();
      markerRef.current = thisMarkerRef.current;
      setIsVisible(true);

      console.log('Marker found');
    },
    thisMarkerRef.current
  );

  useEventListener(
    'markerLost',
    () => {
      !!onMarkerLost && onMarkerLost();
      markerRef.current = null;
      setIsVisible(false);

      console.log('Marker lost');
    },
    thisMarkerRef.current
  );

  return inherent ? (
    <a-marker {...parameters} ref={thisMarkerRef}>
      {children}
    </a-marker>
  ) : (
    <a-marker-camera {...parameters} ref={thisMarkerRef}>
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

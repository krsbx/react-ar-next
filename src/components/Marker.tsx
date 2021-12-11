import React, { useRef } from 'react';
import { useEventListener } from 'krsbx-hooks';
import { useARProvider } from './ARProvider';
import { markerInterface } from '../utils/componentInterface';

const Marker: React.FC<markerInterface> = ({
  parameters,
  onMarkerFound,
  onMarkerLost,
  inherent,
  children,
}) => {
  const { setIsVisible, markerRef }: any = useARProvider();
  const thisMarkerRef: any = useRef();

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
    // @ts-ignore
    <a-marker {...parameters} ref={thisMarkerRef}>
      {children}
      {/*// @ts-ignore*/}
    </a-marker>
  ) : (
    // @ts-ignore
    <a-marker-camera {...parameters} ref={thisMarkerRef}>
      {children}
      {/*// @ts-ignore*/}
    </a-marker-camera>
  );
};

Marker.defaultProps = {
  parameters: {},
  inherent: true,
};

export default Marker;

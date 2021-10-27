import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useScript, useWindowDimension, useToggle } from 'krsbx-hooks';

export const ARContext = createContext();

const ARProvider = ({ children }) => {
  const windowSize = useWindowDimension();
  const [isVisible, setIsVisible] = useToggle(false);
  const [isRemoved, setIsRemoved] = useToggle(false);
  const markerRef = useRef();
  const cameraRef = useRef();

  const { isLoading: arFrameLoading } = useScript(
    'https://aframe.io/releases/1.2.0/aframe.min.js',
    'head'
  );
  const { isLoading: arLoading } = useScript(
    'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js',
    'head'
  );

  // Remove Default Camera
  useEffect(() => {
    if (!isRemoved && !arFrameLoading && !arLoading) {
      const defaultCamera = document.querySelector('[camera][aframe-injected]');
      defaultCamera?.remove();

      const newCameraRef = document.getElementById('react-ar-next-camera');

      cameraRef.current = newCameraRef;

      setIsRemoved();
    }
  }, [arFrameLoading, arLoading]);

  return (
    <ARContext.Provider
      value={{
        windowSize: windowSize,
        isVisible,
        setIsVisible,
        markerRef,
        cameraRef,
      }}
    >
      {!arFrameLoading && !arLoading && children}
    </ARContext.Provider>
  );
};

export const useARProvider = () => useContext(ARContext);

export default ARProvider;

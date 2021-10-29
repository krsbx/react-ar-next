import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useScript, useWindowDimension, useToggle } from 'krsbx-hooks';
import 'aframe';

export const ARContext = createContext();

const ARProvider = ({ children }) => {
  const windowSize = useWindowDimension();
  const [isVisible, setIsVisible] = useToggle(false);
  const [isRemoved, setIsRemoved] = useToggle(false);
  const markerRef = useRef();
  const cameraRef = useRef();

  const { isLoading: arLoading } = useScript('./aframe-ar.js', document.head);

  // Remove Default Camera
  useEffect(() => {
    if (!isRemoved && !arLoading) {
      const defaultCamera = document.querySelector('[camera][aframe-injected]');
      defaultCamera?.remove();

      const newCameraRef = document.getElementById('react-ar-next-camera');

      cameraRef.current = newCameraRef;

      setIsRemoved();
    }
  }, [arLoading]);

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
      {!arLoading && children}
    </ARContext.Provider>
  );
};

export const useARProvider = () => useContext(ARContext);

export default ARProvider;

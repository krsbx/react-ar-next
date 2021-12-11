import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useScript, useWindowDimension, useToggle } from 'krsbx-hooks';

export const ARContext = createContext({
  windowSize: { width: 0, height: 0 },
  isVisible: false,
  setIsVisible: (newValue?: boolean) => {},
  distance: undefined,
  markerRef: undefined,
  cameraRef: undefined,
});

const ARProvider: React.FC = ({ children }) => {
  const windowSize = useWindowDimension();
  const [isVisible, setIsVisible] = useToggle(false);
  const [isRemoved, setIsRemoved] = useToggle(false);
  const distance: any = useRef();
  const markerRef: any = useRef();
  const cameraRef: any = useRef();

  const { isLoading: arFrameLoading } = useScript(
    'https://aframe.io/releases/1.2.0/aframe.min.js',
    document.head
  );
  const { isLoading: arLoading } = useScript('./aframe-ar.js', document.head);

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
        distance,
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

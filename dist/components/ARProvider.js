import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useRef } from 'react';
import { useScript, useWindowDimension, useToggle } from 'krsbx-hooks';
export const ARContext = createContext({
    windowSize: { width: 0, height: 0 },
    isVisible: false,
    setIsVisible: (newValue) => { },
    distance: undefined,
    markerRef: undefined,
    cameraRef: undefined,
});
const ARProvider = ({ children }) => {
    const windowSize = useWindowDimension();
    const [isVisible, setIsVisible] = useToggle(false);
    const [isRemoved, setIsRemoved] = useToggle(false);
    const distance = useRef();
    const markerRef = useRef();
    const cameraRef = useRef();
    const { isLoading: arFrameLoading } = useScript('https://aframe.io/releases/1.2.0/aframe.min.js', document.head);
    const { isLoading: arLoading } = useScript('./aframe-ar.js', document.head);
    // Remove Default Camera
    useEffect(() => {
        if (!isRemoved && !arFrameLoading && !arLoading) {
            const defaultCamera = document.querySelector('[camera][aframe-injected]');
            defaultCamera === null || defaultCamera === void 0 ? void 0 : defaultCamera.remove();
            const newCameraRef = document.getElementById('react-ar-next-camera');
            cameraRef.current = newCameraRef;
            setIsRemoved();
        }
    }, [arFrameLoading, arLoading]);
    return (_jsx(ARContext.Provider, Object.assign({ value: {
            windowSize: windowSize,
            isVisible,
            setIsVisible,
            distance,
            markerRef,
            cameraRef,
        } }, { children: !arFrameLoading && !arLoading && children }), void 0));
};
export const useARProvider = () => useContext(ARContext);
export default ARProvider;

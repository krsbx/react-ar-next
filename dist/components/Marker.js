import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { useEventListener } from 'krsbx-hooks';
import { useARProvider } from './ARProvider';
const Marker = ({ parameters, onMarkerFound, onMarkerLost, inherent, children, }) => {
    const { setIsVisible, markerRef } = useARProvider();
    const thisMarkerRef = useRef();
    useEventListener('markerFound', () => {
        !!onMarkerFound && onMarkerFound();
        markerRef.current = thisMarkerRef.current;
        setIsVisible(true);
        console.log('Marker found');
    }, thisMarkerRef.current);
    useEventListener('markerLost', () => {
        !!onMarkerLost && onMarkerLost();
        markerRef.current = null;
        setIsVisible(false);
        console.log('Marker lost');
    }, thisMarkerRef.current);
    return inherent ? (
    // @ts-ignore
    _jsx("a-marker", Object.assign({}, parameters, { ref: thisMarkerRef }, { children: children }), void 0)) : (
    // @ts-ignore
    _jsx("a-marker-camera", Object.assign({}, parameters, { ref: thisMarkerRef }, { children: children }), void 0));
};
Marker.defaultProps = {
    parameters: {},
    inherent: true,
};
export default Marker;

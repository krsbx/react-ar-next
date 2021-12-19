import { useRef } from 'react';
import { useEventListener } from 'krsbx-hooks';
import { useARProvider } from '../components/ARProvider';
const useDistanceSubscriber = () => {
    const { cameraRef, markerRef, distance } = useARProvider();
    const checkerInterval = setInterval(() => {
        const cameraPos = cameraRef.current && cameraRef.current.object3D.position;
        const markerPos = markerRef.current && markerRef.current.object3D.position;
        if (!!cameraPos && !!markerPos)
            distance.current = cameraPos.distanceTo(markerPos);
    }, 1000);
    const distanceChecker = useRef();
    useEventListener('markerFound', () => {
        if (markerRef.current && cameraRef.current) {
            distanceChecker.current = checkerInterval;
        }
    }, markerRef.current);
    useEventListener('markerLost', () => {
        !!distanceChecker.current && clearInterval(distanceChecker.current);
    }, markerRef.current);
};
export default useDistanceSubscriber;

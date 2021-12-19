import { jsx as _jsx } from "react/jsx-runtime";
import _ from 'lodash';
import { useRef } from 'react';
import { renderVirtualComponent } from '../utils/arToolKitHandler';
import SceneRenderer from './SceneRenderer';
import useGesture from '../utils/useGesture';
import useDistanceSubscriber from '../utils/useDistanceSubscriber';
import { useEventListener } from 'krsbx-hooks';
const AFrameRenderer = (props) => {
    const { gestureHandler, onError, onInit, autoRestart } = props;
    const container = document.body;
    const renderer = useRef();
    !!gestureHandler && useGesture(gestureHandler);
    // Add event listner for get distance between marker and camera
    useDistanceSubscriber();
    // On camera cant be initialize
    useEventListener('camera-error', () => {
        !!onError && onError();
        console.error("Camera can't be initialize!");
        if (autoRestart) {
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    });
    // On camera can be initialize
    useEventListener('camera-init', () => {
        !!onInit && onInit();
        console.log('Camera successfulyy initialized!');
    });
    useEventListener('gps-entity-place-added', () => {
        console.log('Geolocation objects added!');
    });
    return renderVirtualComponent(_jsx(SceneRenderer, Object.assign({}, _.omit(props, ['gestureHandler']), { renderer: renderer }), void 0), container);
};
AFrameRenderer.defaultProps = {
    arToolKit: {},
    getSceneRef: () => { },
    inherent: true,
};
export default AFrameRenderer;

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs } from "react/jsx-runtime";
import { prepareToolKitParams, passSceneRef, locationMode, } from '../utils/arToolKitHandler';
const SceneRenderer = (props) => {
    const { arToolKit, getSceneRef, inherent, geoLocation, renderer, children } = props, rest = __rest(props, ["arToolKit", "getSceneRef", "inherent", "geoLocation", "renderer", "children"]);
    const arjs = prepareToolKitParams(arToolKit);
    return (
    // @ts-ignore
    _jsxs("a-scene", Object.assign({ ref: (sceneRef) => {
            passSceneRef(getSceneRef, sceneRef);
            renderer.current = sceneRef;
        }, embedded: true, arjs: arjs }, rest, { "vr-mode-ui": "enabled: false" }, { children: [children, locationMode(geoLocation || false)] }), void 0));
};
SceneRenderer.defaultProps = {
    arToolKit: {},
    getSceneRef: () => { },
    inherent: true,
};
export default SceneRenderer;

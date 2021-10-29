"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ARToolKitHandler = require("../utils/ARToolKitHandler");

var _PropChecking = require("../utils/PropChecking");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["arToolKit", "getSceneRef", "inherent", "geoLocation", "renderer", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SceneRenderer = function SceneRenderer(props) {
  var arToolKit = props.arToolKit,
      getSceneRef = props.getSceneRef,
      inherent = props.inherent,
      geoLocation = props.geoLocation,
      renderer = props.renderer,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("a-scene", _objectSpread(_objectSpread({
    ref: function ref(sceneRef) {
      (0, _ARToolKitHandler.passSceneRef)(getSceneRef, sceneRef);
      renderer.current = sceneRef;
    },
    embedded: true,
    arjs: (0, _ARToolKitHandler.prepareToolKitParams)(arToolKit)
  }, rest), {}, {
    "vr-mode-ui": "enabled: false",
    children: [children, (0, _ARToolKitHandler.locationMode)(geoLocation)]
  }));
};

SceneRenderer.propTypes = _PropChecking.rendererPropsType;
SceneRenderer.defaultProps = {
  arToolKit: {},
  getSceneRef: function getSceneRef() {},
  inherent: true
};
var _default = SceneRenderer;
exports.default = _default;
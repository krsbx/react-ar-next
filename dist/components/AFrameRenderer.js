"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _arToolKitHandler = require("../utils/arToolKitHandler");

var _SceneRenderer = _interopRequireDefault(require("./SceneRenderer"));

var _propChecking = require("../utils/propChecking");

var _useGesture = _interopRequireDefault(require("../utils/useGesture"));

var _useDistanceSubscriber = _interopRequireDefault(require("../utils/useDistanceSubscriber"));

var _krsbxHooks = require("krsbx-hooks");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AFrameRenderer = function AFrameRenderer(props) {
  var gestureHandler = props.gestureHandler,
      onError = props.onError,
      onInit = props.onInit;
  var container = document.body;
  var renderer = (0, _react.useRef)();
  !!gestureHandler && (0, _useGesture.default)(gestureHandler); // Add event listner for get distance between marker and camera

  (0, _useDistanceSubscriber.default)(); // On camera cant be initialize

  (0, _krsbxHooks.useEventListener)('camera-error', function () {
    !!onError && onError();
    console.error("Camera can't be initialize!");
  }); // On camera can be initialize

  (0, _krsbxHooks.useEventListener)('camera-init', function () {
    !!onInit && onInit();
    console.log('Camera successfulyy initialized!');
  });
  (0, _krsbxHooks.useEventListener)('gps-entity-place-added', function () {
    console.log('Geolocation objects added!');
  });
  return (0, _arToolKitHandler.renderVirtualComponent)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_SceneRenderer.default, _objectSpread(_objectSpread({}, _lodash.default.omit(props, ['gestureHandler'])), {}, {
    renderer: renderer
  })), container);
};

AFrameRenderer.propTypes = _propChecking.aframeRenderPropType;
AFrameRenderer.defaultProps = {
  arToolKit: {},
  getSceneRef: function getSceneRef() {},
  inherent: true
};
var _default = AFrameRenderer;
exports.default = _default;
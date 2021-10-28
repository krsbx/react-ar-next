"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireWildcard(require("react"));

var _ARToolKitHandler = require("../utils/ARToolKitHandler");

var _SceneRenderer = _interopRequireDefault(require("./SceneRenderer"));

var _PropChecking = require("../utils/PropChecking");

var _useGesture = _interopRequireDefault(require("../utils/useGesture"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var AFrameRenderer = function AFrameRenderer(props) {
  var gestureHandler = props.gestureHandler;
  var container = document.body;
  var renderer = (0, _react.useRef)();
  !!gestureHandler && (0, _useGesture.default)(gestureHandler);
  return (0, _ARToolKitHandler.renderVirtualComponent)( /*#__PURE__*/_react.default.createElement(_SceneRenderer.default, _extends({}, _lodash.default.omit(props, ['gestureHandler']), {
    renderer: renderer
  })), container);
};

AFrameRenderer.propTypes = _PropChecking.rendererPropsType;
AFrameRenderer.defaultProps = {
  arToolKit: {},
  getSceneRef: function getSceneRef() {},
  inherent: true
};
var _default = AFrameRenderer;
exports.default = _default;
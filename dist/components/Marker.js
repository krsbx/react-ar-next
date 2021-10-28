"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MarkerHandler = require("../utils/MarkerHandler");

var _PropChecking = require("../utils/PropChecking");

var _krsbxHooks = require("krsbx-hooks");

var _ARProvider = require("./ARProvider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Marker = function Marker(_ref) {
  var parameters = _ref.parameters,
      onMarkerFound = _ref.onMarkerFound,
      onMarkerLost = _ref.onMarkerLost,
      inherent = _ref.inherent,
      children = _ref.children;

  var _useARProvider = (0, _ARProvider.useARProvider)(),
      setIsVisible = _useARProvider.setIsVisible,
      markerRef = _useARProvider.markerRef;

  var thisMarkerRef = (0, _react.useRef)();
  !!parameters && (0, _MarkerHandler.isCustomMarker)(parameters);
  (0, _krsbxHooks.useEventListener)('markerFound', function () {
    !!onMarkerFound && onMarkerFound();
    markerRef.current = thisMarkerRef.current;
    setIsVisible(true);
  }, thisMarkerRef.current);
  (0, _krsbxHooks.useEventListener)('markerLost', function () {
    !!onMarkerLost && onMarkerLost();
    markerRef.current = null;
    setIsVisible(false);
  }, thisMarkerRef.current);
  return inherent ? /*#__PURE__*/_react.default.createElement("a-marker", _extends({}, parameters, {
    ref: markerRef
  }), children) : /*#__PURE__*/_react.default.createElement("a-marker-camera", _extends({}, parameters, {
    ref: markerRef
  }), children);
};

Marker.propTypes = _PropChecking.markerPropType;
Marker.defaultProps = {
  parameters: {},
  inherent: true
};
var _default = Marker;
exports.default = _default;
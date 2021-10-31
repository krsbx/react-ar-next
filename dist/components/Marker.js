"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _markerHandler = require("../utils/markerHandler");

var _propChecking = require("../utils/propChecking");

var _krsbxHooks = require("krsbx-hooks");

var _ARProvider = require("./ARProvider");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  !!parameters && (0, _markerHandler.isCustomMarker)(parameters);
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
  return inherent ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a-marker", _objectSpread(_objectSpread({}, parameters), {}, {
    ref: thisMarkerRef,
    children: children
  })) : /*#__PURE__*/(0, _jsxRuntime.jsx)("a-marker-camera", _objectSpread(_objectSpread({}, parameters), {}, {
    ref: thisMarkerRef,
    children: children
  }));
};

Marker.propTypes = _propChecking.markerPropType;
Marker.defaultProps = {
  parameters: {},
  inherent: true
};
var _default = Marker;
exports.default = _default;
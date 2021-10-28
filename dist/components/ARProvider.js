"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useARProvider = exports.default = exports.ARContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _krsbxHooks = require("krsbx-hooks");

require("aframe");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ARContext = /*#__PURE__*/(0, _react.createContext)();
exports.ARContext = ARContext;

var ARProvider = function ARProvider(_ref) {
  var children = _ref.children;
  var windowSize = (0, _krsbxHooks.useWindowDimension)();

  var _useToggle = (0, _krsbxHooks.useToggle)(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      isVisible = _useToggle2[0],
      setIsVisible = _useToggle2[1];

  var _useToggle3 = (0, _krsbxHooks.useToggle)(false),
      _useToggle4 = _slicedToArray(_useToggle3, 2),
      isRemoved = _useToggle4[0],
      setIsRemoved = _useToggle4[1];

  var markerRef = (0, _react.useRef)();
  var cameraRef = (0, _react.useRef)();

  var _useScript = (0, _krsbxHooks.useScript)('./aframe-ar.js', document.head),
      arLoading = _useScript.isLoading; // Remove Default Camera


  (0, _react.useEffect)(function () {
    if (!isRemoved && !arLoading) {
      var defaultCamera = document.querySelector('[camera][aframe-injected]');
      defaultCamera === null || defaultCamera === void 0 ? void 0 : defaultCamera.remove();
      var newCameraRef = document.getElementById('react-ar-next-camera');
      cameraRef.current = newCameraRef;
      setIsRemoved();
    }
  }, [arLoading]);
  return /*#__PURE__*/_react.default.createElement(ARContext.Provider, {
    value: {
      windowSize: windowSize,
      isVisible: isVisible,
      setIsVisible: setIsVisible,
      markerRef: markerRef,
      cameraRef: cameraRef
    }
  }, !arLoading && children);
};

var useARProvider = function useARProvider() {
  return (0, _react.useContext)(ARContext);
};

exports.useARProvider = useARProvider;
var _default = ARProvider;
exports.default = _default;
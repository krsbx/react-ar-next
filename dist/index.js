"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AFrameRenderer", {
  enumerable: true,
  get: function get() {
    return _AFrameRenderer.default;
  }
});
Object.defineProperty(exports, "ARProvider", {
  enumerable: true,
  get: function get() {
    return _ARProvider.default;
  }
});
Object.defineProperty(exports, "Box", {
  enumerable: true,
  get: function get() {
    return _Box.default;
  }
});
Object.defineProperty(exports, "Entity", {
  enumerable: true,
  get: function get() {
    return _Entity.default;
  }
});
Object.defineProperty(exports, "Example", {
  enumerable: true,
  get: function get() {
    return _Example.default;
  }
});
Object.defineProperty(exports, "Marker", {
  enumerable: true,
  get: function get() {
    return _Marker.default;
  }
});
Object.defineProperty(exports, "SceneRenderer", {
  enumerable: true,
  get: function get() {
    return _SceneRenderer.default;
  }
});
Object.defineProperty(exports, "useARCamera", {
  enumerable: true,
  get: function get() {
    return _useARCamera.default;
  }
});
Object.defineProperty(exports, "useARDistance", {
  enumerable: true,
  get: function get() {
    return _useARDistance.default;
  }
});
Object.defineProperty(exports, "useARMarker", {
  enumerable: true,
  get: function get() {
    return _useARMarker.default;
  }
});
Object.defineProperty(exports, "useARProvider", {
  enumerable: true,
  get: function get() {
    return _ARProvider.useARProvider;
  }
});

var _AFrameRenderer = _interopRequireDefault(require("./components/AFrameRenderer"));

var _ARProvider = _interopRequireWildcard(require("./components/ARProvider"));

var _Box = _interopRequireDefault(require("./components/Box"));

var _Entity = _interopRequireDefault(require("./components/Entity"));

var _Example = _interopRequireDefault(require("./components/Example"));

var _Marker = _interopRequireDefault(require("./components/Marker"));

var _SceneRenderer = _interopRequireDefault(require("./components/SceneRenderer"));

var _useARCamera = _interopRequireDefault(require("./utils/useARCamera"));

var _useARDistance = _interopRequireDefault(require("./utils/useARDistance"));

var _useARMarker = _interopRequireDefault(require("./utils/useARMarker"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
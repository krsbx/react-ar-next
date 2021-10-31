"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AFrameRenderer = _interopRequireDefault(require("./AFrameRenderer"));

var _Marker = _interopRequireDefault(require("./Marker"));

var _Entity = _interopRequireDefault(require("./Entity"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Example = function Example() {
  var scene = (0, _react.useRef)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AFrameRenderer.default, {
      arToolKit: {},
      stats: true,
      getSceneRef: function getSceneRef(ref) {
        return scene.current = ref;
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Marker.default, {
        parameters: {
          preset: 'hiro'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Entity.default, {
          material: "color: red",
          "gltf-model": "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf",
          scale: {
            x: 0.02,
            y: 0.02,
            z: 0.02
          },
          position: {
            x: 0,
            y: 0,
            z: 0
          },
          animation: [{
            property: 'rotation',
            to: {
              x: 0,
              y: 360,
              z: 0
            },
            dur: 5000,
            loop: true
          }, {
            property: 'scale',
            from: {
              x: 0.02,
              y: 0.02,
              z: 0.02
            },
            to: {
              x: 0.2,
              y: 0.2,
              z: 0.2
            },
            dur: 5000,
            loop: true
          }]
        })
      })
    })
  });
};

var _default = Example;
exports.default = _default;
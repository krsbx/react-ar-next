"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderVirtualComponent = exports.prepareToolKitParams = exports.passSceneRef = exports.locationMode = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _constant = require("./constant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prepareToolKitParams = function prepareToolKitParams(parameters) {
  var toolKitParams = '';

  _lodash.default.forEach(parameters, function (value, index) {
    if (_lodash.default.includes(_constant.PARAMETERS, index)) toolKitParams += "".concat(index, ": ").concat(parameters[index], ";");
  });

  return toolKitParams;
};

exports.prepareToolKitParams = prepareToolKitParams;

var passSceneRef = function passSceneRef(getSceneRef, ref) {
  return getSceneRef(ref) || ref;
};

exports.passSceneRef = passSceneRef;

var locationMode = function locationMode(value) {
  return value ? /*#__PURE__*/React.createElement("a-entity", {
    camera: true,
    "gps-camera": true,
    "rotation-reader": true,
    "look-controls": false,
    position: "0 1.6 0",
    id: 'react-ar-next-camera'
  }) : /*#__PURE__*/React.createElement("a-entity", {
    camera: true,
    "look-controls": false,
    position: "0 1.6 0",
    id: 'react-ar-next-camera'
  });
};

exports.locationMode = locationMode;

var renderVirtualComponent = function renderVirtualComponent(component, container) {
  return /*#__PURE__*/_reactDom.default.createPortal(component, container);
};

exports.renderVirtualComponent = renderVirtualComponent;
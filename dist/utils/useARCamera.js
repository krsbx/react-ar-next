"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ARProvider = require("../components/ARProvider");

// Use this element for getting the current active camera
var useARCamera = function useARCamera() {
  var _useARProvider = (0, _ARProvider.useARProvider)(),
      cameraRef = _useARProvider.cameraRef;

  return cameraRef.current;
};

var _default = useARCamera;
exports.default = _default;
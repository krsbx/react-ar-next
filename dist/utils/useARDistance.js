"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ARProvider = require("../components/ARProvider");

// Use this hooks for getting the current distance between
// current active camera with current detected marker
var useARDistance = function useARDistance() {
  var _useARProvider = (0, _ARProvider.useARProvider)(),
      distance = _useARProvider.distance;

  return distance.current;
};

var _default = useARDistance;
exports.default = _default;
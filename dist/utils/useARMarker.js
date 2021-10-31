"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ARProvider = require("../components/ARProvider");

// Use this hooks for getting the current active marker
var useARMarker = function useARMarker() {
  var _useARProvider = (0, _ARProvider.useARProvider)(),
      markerRef = _useARProvider.markerRef;

  return markerRef.current;
};

var _default = useARMarker;
exports.default = _default;
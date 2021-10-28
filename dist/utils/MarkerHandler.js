"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCustomMarker = void 0;

var isCustomMarker = function isCustomMarker(parameters) {
  if (parameters !== undefined && parameters.preset === 'custom') {
    parameters.url = parameters.patternUrl;
    delete parameters.patternUrl;
    return parameters;
  }
};

exports.isCustomMarker = isCustomMarker;
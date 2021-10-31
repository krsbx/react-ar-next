"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _krsbxHooks = require("krsbx-hooks");

var _ARProvider = require("../components/ARProvider");

var useDistanceSubscriber = function useDistanceSubscriber() {
  var _useARProvider = (0, _ARProvider.useARProvider)(),
      cameraRef = _useARProvider.cameraRef,
      markerRef = _useARProvider.markerRef,
      distance = _useARProvider.distance;

  var checkerInterval = setInterval(function () {
    var cameraPos = cameraRef.current && cameraRef.current.object3D.position;
    var markerPos = markerRef.current && markerRef.current.object3D.position;
    if (!!cameraPos && !!markerPos) distance.current = cameraPos.distanceTo(markerPos);
  }, 1000);
  var distanceChecker = (0, _react.useRef)();
  (0, _krsbxHooks.useEventListener)('markerFound', function () {
    if (markerRef.current && cameraRef.current) {
      distanceChecker.current = checkerInterval;
    }
  }, markerRef.current);
  (0, _krsbxHooks.useEventListener)('markerLost', function () {
    !!distanceChecker.current && clearInterval(distanceChecker.current);
  }, markerRef.current);
};

var _default = useDistanceSubscriber;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _krsbxHooks = require("krsbx-hooks");

var _ARProvider = require("../components/ARProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useGesture = function useGesture(gestureObjects) {
  var oneFinger = gestureObjects.oneFinger,
      twoFinger = gestureObjects.twoFinger,
      threeFinger = gestureObjects.threeFinger,
      fourFinger = gestureObjects.fourFinger;

  var _useARProvider = (0, _ARProvider.useARProvider)(),
      isVisible = _useARProvider.isVisible;

  !!oneFinger && (0, _krsbxHooks.useEventListener)('onefingermove', function (e) {
    isVisible && oneFinger();
  });
  !!twoFinger && (0, _krsbxHooks.useEventListener)('twofingermove', function (e) {
    isVisible && twoFinger();
  });
  !!threeFinger && (0, _krsbxHooks.useEventListener)('threefingermove', function (e) {
    isVisible && threeFinger();
  });
  !!fourFinger && (0, _krsbxHooks.useEventListener)('manyfingermove', function (e) {
    isVisible && fourFinger();
  });
};

var _default = useGesture;
exports.default = _default;
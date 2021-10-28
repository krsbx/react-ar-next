"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimations = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _constant = require("./constant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAnimations = function getAnimations(props) {
  var animationParams = '';

  _lodash.default.forEach(props, function (value, index) {
    if (_lodash.default.includes(_constant.ANIMATION_PROPERTIES, index)) animationParams += "".concat(index, ": ").concat(props[index], ";");
  });

  return animationParams;
};

exports.getAnimations = getAnimations;
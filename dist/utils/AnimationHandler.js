"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimations = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _constant = require("./constant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var singleAnimationHandler = function singleAnimationHandler(props) {
  var animationParams = '';

  _lodash.default.forEach(props, function (value, index) {
    if (_lodash.default.includes(_constant.ANIMATION_PROPERTIES, index)) {
      var currentData = props[index];

      if (_lodash.default.isObject(currentData)) {
        animationParams += "".concat(index, ": ").concat(_lodash.default.values(currentData).join(' '), ";");
      } else {
        animationParams += "".concat(index, ": ").concat(currentData, ";");
      }
    }
  });

  return animationParams;
};

var multipleAnimationHandler = function multipleAnimationHandler(props) {
  var animationParams = [];

  _lodash.default.forEach(props, function (value) {
    var currentData = value;
    animationParams.push(singleAnimationHandler(currentData));
  });

  var animationObject = {};

  _lodash.default.forEach(animationParams, function (value, index) {
    var animationName = index === 0 ? 'animation' : "animation__".concat(index + 1);
    animationObject[animationName] = value;
  });

  return animationObject;
};

var getAnimations = function getAnimations(props) {
  var animationParams = '';

  if (_lodash.default.isArray(props)) {
    // Multiple animations
    animationParams = multipleAnimationHandler(props);
  } else if (_lodash.default.isObject(props) && !_lodash.default.isArray(props)) {
    // Single animations
    animationParams = {
      animation: singleAnimationHandler(props)
    };
  }

  return animationParams;
};

exports.getAnimations = getAnimations;
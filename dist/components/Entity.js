"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _PropChecking = require("../utils/PropChecking");

var _AnimationHandler = require("../utils/AnimationHandler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Entity = function Entity(props) {
  var animation = props.animation && (0, _AnimationHandler.getAnimations)(props.animation);
  return /*#__PURE__*/_react.default.createElement("a-entity", _extends({}, _lodash.default.omit(props, ['children', 'animation']), {
    animation: animation
  }), props.children);
};

Entity.propTypes = _PropChecking.entityPropType;
var _default = Entity;
exports.default = _default;
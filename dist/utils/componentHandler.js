"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propsConverter = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propsConverter = function propsConverter(props) {
  _lodash.default.forEach(props, function (value, index) {
    var currentData = value;

    if (_lodash.default.isObject(currentData)) {
      props[index] = _lodash.default.values(currentData).join(' ');
    }
  });

  return props;
};

exports.propsConverter = propsConverter;
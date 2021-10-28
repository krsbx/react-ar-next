"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Example = _interopRequireDefault(require("./components/Example"));

var _ARProvider = _interopRequireDefault(require("./components/ARProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_ARProvider.default, null, /*#__PURE__*/_react.default.createElement(_Example.default, null))), document.getElementById('root'));
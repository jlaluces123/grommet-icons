"use strict";

exports.__esModule = true;
exports.Italic = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Italic = function Italic(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Italic"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13,19.56l-.13.43H6.3l.16-.43a4.05,4.05,0,0,0,1.3-.17,1.6,1.6,0,0,0,.76-.55,7.22,7.22,0,0,0,.8-2l2.77-9.61a7.07,7.07,0,0,0,.35-1.81.86.86,0,0,0-.15-.52.94.94,0,0,0-.46-.32,4.28,4.28,0,0,0-1.22-.11l.14-.43h6.16l-.13.43a2.6,2.6,0,0,0-1.12.17,1.78,1.78,0,0,0-.81.67,9.08,9.08,0,0,0-.71,1.93L11.4,16.87A8.76,8.76,0,0,0,11,18.56a.83.83,0,0,0,.15.5.92.92,0,0,0,.47.32A6.35,6.35,0,0,0,13,19.56Z"
  }));
};

exports.Italic = Italic;
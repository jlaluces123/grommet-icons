"use strict";

exports.__esModule = true;
exports.WifiMedium = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var WifiMedium = function WifiMedium(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "WifiMedium"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    d: "M12,20 C13.1045695,20 14,19.1045695 14,18 C14,16.8954305 13.1045695,16 12,16 C10.8954305,16 10,16.8954305 10,18 C10,19.1045695 10.8954305,20 12,20 Z M7.75735931,13.7573593 C10.1005051,11.4142136 13.8994949,11.4142136 16.2426407,13.7573593 M4.92893219,10.9289322 C8.83417511,7.02368927 15.1658249,7.02368927 19.0710678,10.9289322"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    strokeOpacity: ".2",
    strokeWidth: "2",
    d: "M2.10050506,8.10050506 C7.56784515,2.63316498 16.4321549,2.63316498 21.8994949,8.10050506",
    opacity: ".8"
  })));
};

exports.WifiMedium = WifiMedium;
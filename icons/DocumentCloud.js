"use strict";

exports.__esModule = true;
exports.DocumentCloud = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DocumentCloud = function DocumentCloud(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentCloud"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L19,23 M18,1 L18,6 L23,6 M11,13 L6.00166547,13 C4.34389141,13 3,14.3465171 3,16 L3,16 C3,17.6568542 4.34306961,19 5.9906311,19 L7,19 L7,20.0093689 C7,21.6610488 8.33902013,23 10.0016655,23 L11.9983345,23 C13.6561086,23 15,21.6569304 15,20.0093689 L15,19 M11,19 L15.9983345,19 C17.6561086,19 19,17.6534829 19,16 L19,16 C19,14.3431458 17.6569304,13 16.0093689,13 L15,13 L15,11.9906311 C15,10.3389512 13.6609799,9 11.9983345,9 L10.0016655,9 C8.34389141,9 7,10.3430696 7,11.9906311 L7,13"
  }));
};

exports.DocumentCloud = DocumentCloud;
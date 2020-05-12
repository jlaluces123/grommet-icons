"use strict";

exports.__esModule = true;
exports.Spectrum = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Spectrum = function Spectrum(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Spectrum"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#7B2DFB",
    fillRule: "evenodd",
    d: "M22.131075,23.3986125 L13.12545,23.3986125 C12.3297,23.3986125 11.6187,22.7794875 11.6217,21.9822375 C11.64045,17.0236125 10.7442,15.3979875 8.8692,13.7584875 C6.900075,12.0372375 3.455325,11.7034875 1.49445,11.6641125 C0.6732,11.6476125 0.01695,10.9801125 0.01545,10.1573625 L7.5e-05,1.5331125 C-0.001425,0.7279875 0.627825,0.0582375 1.431075,0.0222375 C4.380825,-0.1097625 11.063325,0.2063625 16.521825,4.9786125 C20.9547,8.8538625 23.345325,14.5204875 23.639325,21.8378625 C23.67345,22.6906125 22.983075,23.3986125 22.131075,23.3986125"
  }));
};

exports.Spectrum = Spectrum;
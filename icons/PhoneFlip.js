"use strict";

exports.__esModule = true;
exports.PhoneFlip = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PhoneFlip = function PhoneFlip(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PhoneFlip"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 1C7.5911 1 7.22339 1.24895 7.07152 1.62861L3.07152 11.6286C2.97616 11.867 2.97616 12.133 3.07152 12.3714L7.07152 22.3714C7.22339 22.751 7.5911 23 8 23H18C18.3318 23 18.642 22.8354 18.8281 22.5606C19.0141 22.2859 19.0517 21.9367 18.9285 21.6286L15.077 12L18.9285 2.37139C19.0517 2.0633 19.0141 1.71414 18.8281 1.43937C18.642 1.1646 18.3318 1 18 1H8ZM5.47703 11L8.67703 3H11.4706C11.47 3.53001 11.8983 4 12.4715 4H12.5285C12.9453 4 13.3185 3.74143 13.4648 3.35112C13.5087 3.23406 13.5293 3.1156 13.5294 3H16.523L13.323 11H5.47703ZM5.47703 13L8.67703 21H16.523L13.323 13H5.47703ZM11.0352 19.773C10.79 19.1192 11.2733 18.4219 11.9715 18.4219H12.0285C12.4453 18.4219 12.8185 18.6804 12.9648 19.0708C13.21 19.7245 12.7267 20.4219 12.0285 20.4219H11.9715C11.5547 20.4219 11.1815 20.1633 11.0352 19.773Z",
    fill: "black"
  }));
};

exports.PhoneFlip = PhoneFlip;
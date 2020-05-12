function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var Channel = function Channel(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Channel"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M2,9 L22,9 L22,22 L2,22 L2,9 Z M21,2 L13,9 L11,9 L3,2"
  }));
};
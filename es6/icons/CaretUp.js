function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var CaretUp = function CaretUp(props) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "CaretUp"
  }, props), /*#__PURE__*/React.createElement("polygon", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    points: "22 4 12 16 2 4",
    transform: "matrix(1 0 0 -1 0 20)"
  }));
};
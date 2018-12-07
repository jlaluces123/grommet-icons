var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { StyledIcon } from '../StyledIcon';

export var ObjectUngroup = function ObjectUngroup(props) {
  return React.createElement(
    StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'ObjectUngroup' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,1 L4,1 L4,4 L1,4 L1,1 Z M13,1 L16,1 L16,4 L13,4 L13,1 Z M4,2 L13,2 M15,9 L20,9 M4,15 L13,15 M1,13 L4,13 L4,16 L1,16 L1,13 Z M13,13 L16,13 L16,16 L13,16 L13,13 Z M2,4 L2,13 M15,4 L15,13 M20,8 L23,8 L23,11 L20,11 L20,8 Z M11,22 L20,22 M8,20 L11,20 L11,23 L8,23 L8,20 Z M20,20 L23,20 L23,23 L20,23 L20,20 Z M9,16 L9,20 M22,11 L22,20' })
  );
};
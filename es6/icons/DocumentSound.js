var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import { StyledIcon } from '../StyledIcon';

export var DocumentSound = function DocumentSound(props) {
  return React.createElement(
    StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'DocumentSound' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2.99787498,8.99999999 L2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L18,23 M16,1 L16,6 L21,6 M1,14.0104121 L1,18.0104121 L4,18.0104121 L8,21.0104121 L8,11 L4,14.0104121 L1,14.0104121 Z M11,18 L11,18 C12.1045695,18 13,17.1045695 13,16 C13,14.8954305 12.1045695,14 11,14 M11,22 L11,22 C14.3137085,22 17,19.3137085 17,16 C17,12.6862915 14.3137085,10 11,10' })
  );
};
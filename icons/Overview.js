'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overview = function Overview(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Overview' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M18.5,21 C20.9852814,21 23,18.9852814 23,16.5 C23,14.0147186 20.9852814,12 18.5,12 C16.0147186,12 14,14.0147186 14,16.5 C14,18.9852814 16.0147186,21 18.5,21 L18.5,21 Z M10,7 L14,7 M1.5,14.5 C1.5,14.5 5.5,5 6,4 C6.5,3 7.5,3 8,3 C8.5,3 10,3 10,5 L10,16 M5.5,21 C3.01471863,21 1,18.9852814 1,16.5 C1,14.0147186 3.01471863,12 5.5,12 C7.98528137,12 10,14.0147186 10,16.5 C10,18.9852814 7.98528137,21 5.5,21 L5.5,21 L5.5,21 Z M22.5,14.5 C22.5,14.5 18.5,5 18,4 C17.5,3 16.5,3 16,3 C15.5,3 14,3 14,5 L14,16 M10,16 L14,16' })
  );
};

exports.default = Overview;
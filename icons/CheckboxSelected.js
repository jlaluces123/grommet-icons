'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxSelected = function CheckboxSelected(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'CheckboxSelected' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6' })
  );
};

exports.default = CheckboxSelected;
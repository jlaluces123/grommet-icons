'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Server = function Server(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Server' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M14,19 L15,19 L15,18 L14,18 L14,19 Z M5,23 L19,23 L19,1 L5,1 L5,23 Z M8,5 L16,5 L8,5 Z M8,9 L16,9 L8,9 Z M8,13 L16,13 L8,13 Z' })
  );
};

exports.default = Server;
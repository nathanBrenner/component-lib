'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SneakerButton = undefined;

var _sneakerButton = require('./components/sneakerButton');

Object.defineProperty(exports, 'SneakerButton', {
  enumerable: true,
  get: function get() {
    return _sneakerButton.SneakerButton;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DummyButton = function DummyButton(_ref) {
  var text = _ref.text,
      action = _ref.action;
  return _react["default"].createElement("button", {
    onClick: function onClick() {
      return console.log('ola');
    }
  }, text);
};

var _default = DummyButton;
exports["default"] = _default;

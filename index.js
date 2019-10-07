"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _button = require("@alobato/button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  user-select: none;\n  width: 56px; height: 56px;\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px, rgba(0, 0, 0, 0.2) 0px 3px 5px -1px;\n  display: flex; justify-content: center; align-items: center;\n  background-color: ", ";\n  color: ", ";\n  &:focus {\n    outline: 0;\n    box-shadow: 0 0 0 3px ", ";\n    border: 1px solid ", ";\n  }\n  & > i {\n    display: block;\n    line-height: 0;\n    pointer-events: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = function Button(props) {
  return _react["default"].createElement(_button.ButtonRaw, props, _react["default"].createElement("svg", {
    height: 32,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, _react["default"].createElement("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  })));
};

var _default = (0, _styledComponents["default"])(Button)(_templateObject(), function (props) {
  return props.theme && props.theme.color && props.theme.colors.primary700 ? props.theme.colors.primary700 : 'hsla(207, 73%, 57%, 1)';
}, function (props) {
  return props.theme && props.theme.color && props.theme.colors.white ? props.theme.colors.white : 'white';
}, function (props) {
  return props.theme && props.theme.color && props.theme.colors.primary200 ? props.theme.colors.primary200 : 'hsla(202, 81%, 86%, 1)';
}, function (props) {
  return props.theme && props.theme.color && props.theme.colors.primary400 ? props.theme.colors.primary400 : 'hsla(205, 79%, 66%, 1)';
});

exports["default"] = _default;

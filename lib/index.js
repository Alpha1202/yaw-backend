"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _debug = _interopRequireDefault(require("debug"));

var _config = _interopRequireDefault(require("../src/db/config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var log = (0, _debug["default"])('App');
var port = _config["default"].port;
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  return res.status(200).json({
    Welcome: 'Welcome to YAW'
  });
});
app.listen(port, function () {
  return log("App is listening on port ".concat(port, "!"));
});
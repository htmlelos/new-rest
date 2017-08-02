'use strict';

var _countries = require('./api/countries.js');

var _countries2 = _interopRequireDefault(_countries);

var _serverListen = require('./server.listen.js');

var _serverListen2 = _interopRequireDefault(_serverListen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();

(0, _countries2.default)(app);
listen(app);

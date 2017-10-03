'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _polyMap = require('poly-map');

var _polyMap2 = _interopRequireDefault(_polyMap);

var _functionPipe = require('function-pipe');

var _functionPipe2 = _interopRequireDefault(_functionPipe);

var _message = require('./message');

var _fragment = require('./fragment');

var _fragment2 = _interopRequireDefault(_fragment);

var _core = require('./core');

var core = _interopRequireWildcard(_core);

var _essentials = require('./essentials');

var essentials = _interopRequireWildcard(_essentials);

var _flow = require('./flow');

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createDictionary = function createDictionary(conf) {
  var flow = typeof conf.flow === 'function' ? conf.flow : (0, _flow2.default)(conf.flow);

  return _extends({}, (0, _polyMap2.default)((0, _functionPipe2.default)(flow, _fragment2.default), core), (0, _polyMap2.default)((0, _functionPipe2.default)(flow, _fragment2.default), essentials), {
    fragment: _fragment2.default,
    pipe: _fragment2.default,
    flow: flow,
    lift: (0, _functionPipe2.default)(_message.lift, flow, _fragment2.default)
  });
};

exports.default = createDictionary;
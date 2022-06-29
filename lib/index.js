"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = dotEnv;

require("core-js/modules/es.array.join.js");

var _path = _interopRequireDefault(require("path"));

var _dotenvWebpack = _interopRequireDefault(require("dotenv-webpack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function dotEnv(api) {
  var deployEnv = process.env.DEPLOY_ENV || 'dev';
  var key = 'dotenv';
  api.describe({
    key: key,
    config: {
      "default": {
        path: _path["default"].join(api.cwd, './config', "./.env.".concat(deployEnv))
      },
      schema: function schema(joi) {
        return joi.object({
          path: joi.string()
        });
      }
    },
    enableBy: api.EnableBy.register
  });
  api.chainWebpack(function (memo) {
    var _api$config$key;

    memo.plugin('dotenv').use(_dotenvWebpack["default"], [{
      path: (_api$config$key = api.config[key]) === null || _api$config$key === void 0 ? void 0 : _api$config$key.path
    }]);
    return memo;
  });
}

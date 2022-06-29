const { IApi } = require('umi');
const path = require('path');
const DotEnv = require('dotenv-webpack');

export default function dotEnv(api: typeof IApi) {
  const deployEnv = process.env.DEPLOY_ENV || 'dev';
  const key = 'dotenv';

  api.describe({
    key,
    config: {
      default: {
        path: path.join(api.cwd, './config', `./.env.${deployEnv}`)
      },
      schema(joi){
        return joi.object({
          path: joi.string()
        });
      },
    },
    enableBy: api.EnableBy.register,
  });

  api.chainWebpack(memo => {
    memo.plugin('dotenv').use(DotEnv, [{ path: api.config[key]?.path}]);
    return memo;
  });
}
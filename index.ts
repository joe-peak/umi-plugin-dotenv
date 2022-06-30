import { IApi } from 'umi'
import path from 'path';
import DotEnv from 'dotenv-webpack';

export default function dotEnv(api: IApi) {
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
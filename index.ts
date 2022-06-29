import { join } from 'path'
import { IApi } from 'umi';
import DotEnv from 'dotenv-webpack'

export default function dotEnv(api: IApi) {
  const deployEnv = process.env.DEPLOY_ENV || 'dev';

  api.describe({
    key: 'dotenv',
    config: {
      default: {
        path: join(api.cwd, './config', `./.env.${deployEnv}`)
      },
      schema(joi){
        return joi.object({
          path: joi.string()
        });
      },
    },
    enableBy: api.EnableBy.register,
  })

  api.chainWebpack(memo => {
    memo.plugin('dotEnv').use(DotEnv, [{ path: api.config.dotEnv?.path}]);
    return memo;
  });
}
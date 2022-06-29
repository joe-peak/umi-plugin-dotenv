# dalton-umi-plugin-dotenv
基于 umi4 的 umi dotenv 插件，从.env 文件中加载环境变量

[![NPM](https://img.shields.io/npm/l/dalton-umi-plugin-dotenv)](https://github.com/joe-peak/dalton-umi-plugin-dotenv)
[![npm](https://img.shields.io/npm/v/dalton-umi-plugin-dotenv)](https://github.com/joe-peak/dalton-umi-plugin-dotenv)
[![publish size](https://badgen.net/packagephobia/publish/dalton-umi-plugin-dotenv)](https://github.com/joe-peak/dalton-umi-plugin-dotenv)
[![npm](https://img.shields.io/npm/dm/dalton-umi-plugin-dotenv?color=%23EC407A)](https://www.npmjs.com/package/dalton-umi-plugin-dotenv)
### 安装

```bash
yarn add -D dalton-umi-plugin-dotenv
```

## 使用
umi 配置
```json
{
  "plugins": ["dalton-umi-plugin-dotenv"],
  "dotenv": { "path": "path/to/.env.xxx"}
}
```
## 说明

### 没有配置 dotenv 时

默认会根据 process.env.DEPLOY_ENV 来确定当前的构建环境，以使用对应的 umi config 目录下的环境变量文件(./config/.env.${DEPLOY_ENV})中的环境变量。

示例:
```
    DEPLOY_ENV=dev, 则加载./config/.env.dev 文件
    DEPLOY_ENV=qa, 则加载./config/.env.qa 文件
    DEPLOY_ENV=prod, 则加载./config/.env.prod 文件
```
DEPLOY_ENV 环境变量通过命令行来指定

如果没有指定 DEPLOY_ENV(即 process.env.DEPLOY_ENV ===undefined), 则会默认加载config目录下的 .env.dev 文件。

### 显式配置 dotenv 时

加载配置中 path 字段指定路径的环境变量文件中的环境变量
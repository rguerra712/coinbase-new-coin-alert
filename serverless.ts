import type { AWS } from '@serverless/typescript'

import checkForNewCoins from '@functions/scheduled-job'
import coinApi from '@functions/coin-api'

/* eslint-disable no-template-curly-in-string */
const serverlessConfiguration: AWS = {
  service: 'coinbase-new-coin-alert',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
    },
    lambdaHashingVersion: '20201221'
  },
  // import the function via paths
  functions: { checkForNewCoins, coinApi }
}

module.exports = serverlessConfiguration

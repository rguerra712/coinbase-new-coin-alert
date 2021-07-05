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
    },
    snsTopic: '${self:service}-${self:provider.stage}-alert',
    snsTopicArn: 'arn:aws:sns:us-east-1:#{AWS::AccountId}:${self:custom.snsTopic}'
  },
  plugins: ['serverless-webpack', 'serverless-offline', 'serverless-pseudo-parameters'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      SNS_TOPIC_ARN: '${self:custom.snsTopicArn}'
    },
    lambdaHashingVersion: '20201221',
    iamRoleStatements:
      [{
        Effect: 'Allow',
        Resource: '${self:custom.snsTopicArn}',
        Action: ['sns:*']
      }]
  },
  // import the function via paths
  functions: { checkForNewCoins, coinApi },
  resources:
  {
    Resources: {
      NewCoinAlertSNSTopic:
        {
          Type: 'AWS::SNS::Topic',
          Properties: {
            DisplayName: 'New Coin Alert SNS Topic',
            TopicName: '${self:custom.snsTopic}'
          }
        },
      NewCoinAlertPhoneSNSSubscription:
        {
          Type: 'AWS::SNS::Subscription',
          Properties: {
            Endpoint: '${opt:sms}',
            Protocol: 'sms',
            TopicArn: { Ref: 'NewCoinAlertSNSTopic' }
          }
        }
    }
  }
}

module.exports = serverlessConfiguration

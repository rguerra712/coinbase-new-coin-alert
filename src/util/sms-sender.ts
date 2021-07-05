import { SNS } from 'aws-sdk'

export const sendSmsAlert = async (message: string): Promise<void> => {
  const { SNS_TOPIC_ARN: arn } = process.env
  var params = {
    Message: message,
    TopicArn: arn
  }

  await new SNS({ apiVersion: '2010-03-31' }).publish(params).promise()
}

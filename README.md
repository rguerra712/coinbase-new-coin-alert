# Coinbase New Coin Alert

A simple scheduled job that queries the Coinbase Pro API for new coins and sends an SMS alert when such occurs.

# Prerequisites
The [Serverless Framework](https://www.github.com/serverless/serverless) should be set up.

# Deployment
First clone this repository. Then deploy using serverless deploy with your sms number as a parameters as follows:

```serverless deploy --sms <SMS_NUMBER>```

with the SMS number you wish to message (for example, for 1-(555)-555-55555, use `15555555555`).

Afterward a lambda will check coinbase every minute for new currencies added to Coinbase Pro, and upon finding any new currencies, will send a text to the aforementioned number.
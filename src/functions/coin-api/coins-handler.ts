import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'

const getCoins: ValidatedEventAPIGatewayProxyEvent<any> = async () => {
  return formatJSONResponse({
    coins: {
      name: 'Bitcoin',
      value: 'BTC'
    }
  })
}

export const main = middyfy(getCoins)

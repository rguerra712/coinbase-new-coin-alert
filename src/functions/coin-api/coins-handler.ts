import 'source-map-support/register'

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'
import { getAllCoins } from 'src/clients/coin-repository'

const getCoins: ValidatedEventAPIGatewayProxyEvent<any> = async () => {
  const coins = await getAllCoins()
  return formatJSONResponse({
    coins
  })
}

export const main = middyfy(getCoins)

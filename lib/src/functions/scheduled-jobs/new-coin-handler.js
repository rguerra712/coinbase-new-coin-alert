import 'source-map-support/register'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'
const checkForNewCoins = async (event) => {
  return formatJSONResponse({
    message: 'This is a test!',
    event
  })
}
export const main = middyfy(checkForNewCoins)
// # sourceMappingURL=new-coin-handler.js.map

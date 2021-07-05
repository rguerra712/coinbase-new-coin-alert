import { alertPerNewCoin } from './../../util/new-coin-alerter'
import 'source-map-support/register'

import { middyfy } from '@libs/lambda'
import { checkForNewCoins } from 'src/util/new-coin-checker'

const handleCheckForNewCoins = async (): Promise<void> => {
  await checkForNewCoins(alertPerNewCoin)
}

export const main = middyfy(handleCheckForNewCoins)

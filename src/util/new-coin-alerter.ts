import { CoinbaseCurrency } from 'src/types/Currency'

export const alertPerNewCoin = async (coin: CoinbaseCurrency): Promise<void> => {
  console.log('new coin data', coin)
  // TODO, action such as SMS and webhook
}

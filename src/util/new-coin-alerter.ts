import { CoinbaseCurrency } from 'src/types/Currency'
import { sendSmsAlert } from './sms-sender'

export const alertPerNewCoin = async (coin: CoinbaseCurrency): Promise<void> => {
  console.log('new coin data', coin)
  const message = `${coin.name} (${coin.id}) has been listed on Coinbase`
  await sendSmsAlert(message)
}

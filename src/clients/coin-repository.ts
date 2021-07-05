import { CoinbasePro } from 'coinbase-pro-node'
import { CoinbaseCurrency } from 'src/types/Currency'

export const getAllCoins = async (): Promise<CoinbaseCurrency[]> => {
  return await new CoinbasePro().rest.currency.listCurrencies()
}

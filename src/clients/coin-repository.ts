import { CoinbasePro } from 'coinbase-pro-node'

export const getAllCoins = async () => {
  return await new CoinbasePro().rest.currency.listCurrencies()
}
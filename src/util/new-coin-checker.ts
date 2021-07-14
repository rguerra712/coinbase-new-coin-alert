import { CoinbaseCurrency } from 'src/types/Currency'
import { getAllCoins } from './../clients/coin-repository'
let latestCoins: CoinbaseCurrency[]

export const checkForNewCoins = async (alertNewCoinsExist): Promise<void> => {
  const coins = await getAllCoins()
  console.log('# previous coins fetched', latestCoins?.length)
  console.log('# coins fetched', coins.length)
  console.log('coins fetched', coins)
  if (latestCoins === undefined) {
    latestCoins = coins
    return
  }
  if (latestCoins.length !== coins.length) {
    console.log('NEW COINS ADDED')
    const ids = latestCoins.map(coin => coin.id)
    const newCoins = coins.filter(coin => !ids.some(id => coin.id === id))
    newCoins.forEach(coin => {
      alertNewCoinsExist(coin)
    })
    latestCoins = coins
  }
}

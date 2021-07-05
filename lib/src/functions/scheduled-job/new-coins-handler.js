import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import { CoinbasePro } from 'coinbase-pro-node';
let latestCoins;
const checkForNewCoins = async () => {
    const coins = await new CoinbasePro().rest.currency.listCurrencies();
    console.log('coins fetdched', coins);
    if (latestCoins === undefined) {
        latestCoins = coins;
        return;
    }
    if (latestCoins.length !== coins.length) {
    }
};
export const main = middyfy(checkForNewCoins);
//# sourceMappingURL=new-coins-handler.js.map
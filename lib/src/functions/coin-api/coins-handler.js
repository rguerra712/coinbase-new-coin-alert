import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
const getCoins = async () => {
    return formatJSONResponse({
        coins: {
            name: 'Bitcoin',
            value: 'BTC'
        }
    });
};
export const main = middyfy(getCoins);
//# sourceMappingURL=coins-handler.js.map
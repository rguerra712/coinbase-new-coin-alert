import { handlerPath } from '@libs/handlerResolver';
export default {
    handler: `${handlerPath(__dirname)}/coins-handler.main`,
    events: [
        {
            http: {
                method: 'get',
                path: 'coins'
            }
        }
    ]
};
//# sourceMappingURL=index.js.map
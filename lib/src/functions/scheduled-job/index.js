import { handlerPath } from '@libs/handlerResolver';
export default {
    handler: `${handlerPath(__dirname)}/new-coins-handler.main`,
    events: [
        {
            schedule: 'rate(1 minute)'
        }
    ]
};
//# sourceMappingURL=index.js.map
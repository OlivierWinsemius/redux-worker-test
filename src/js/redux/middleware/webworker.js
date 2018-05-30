/* eslint-disable no-param-reassign */

export default function createWorkerMiddleware(worker) {
    if (!worker) {
        throw new Error(`'createWorkerMiddleware' expects a worker instance as the argument. Instead received: ${worker}`);
    } else if (!worker.postMessage) {
        throw new Error('The worker instance is expected to have a \'postMessage\' method.');
    }

    return ({ dispatch }) => {
        worker.onmessage = ({ data: action }) => {
            dispatch(action);
        };
        return (next) => {
            if (!next) {
                throw new Error('Worker middleware received no \'next\' action. Check your chain of middlewares.');
            }
            return (action) => {
                if (action.meta && action.meta.webWorker) {
                    return worker.postMessage(action);
                }
                return next(action);
            };
        };
    };
}

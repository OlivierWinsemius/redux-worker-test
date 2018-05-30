import Thunk from 'redux-thunk';
import createWorker from './webworker';
import BlockchainWorker from '../../workers/blockchain.worker';

export default [
    Thunk,
    createWorker(new BlockchainWorker()),
];

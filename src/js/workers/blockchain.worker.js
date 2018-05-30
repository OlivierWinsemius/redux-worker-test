import actionTypes from '../redux/types/blockchain';
import { Block } from '../utils/blockchain';

self.onmessage = ({ data: action }) => {
    if (action.type === actionTypes.BLOCKCHAIN_ADD_BLOCK) {
        self.postMessage({
            type: action.type,
            payload: new Block(action.payload).setHash(),
        });
    }
};

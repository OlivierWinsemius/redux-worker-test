/* eslint-disable import/prefer-default-export */
import actionTypes from '../types/blockchain';

// import { Block } from '../../utils/blockchain';

export function addBlockFromParent(parentBlock) {
    return {
        type: actionTypes.BLOCKCHAIN_ADD_BLOCK,
        meta: { webWorker: true },
        payload: parentBlock, // new Block(parentBlock).setHash()
    };
}

// export function addBlockFromParent(parentBlock) {
//     return {
//         type: actionTypes.BLOCKCHAIN_ADD_BLOCK,
//         new Block(parentBlock).setHash()
//     };
// }

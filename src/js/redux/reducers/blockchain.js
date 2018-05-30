import actionTypes from '../types/blockchain';
import { Block } from '../../utils/blockchain';

const rootBlock = new Block({ hash: 'root' });

const initialState = {
    blocks: {
        [rootBlock.hash]: rootBlock,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BLOCKCHAIN_ADD_BLOCK:
            return {
                ...state,
                blocks: {
                    ...state.blocks,
                    // ADDS A NEW BLOCK ON MAIN THREAD (VERY CPU)
                    [action.payload.hash]: action.payload,
                },
            };
        default:
            return state;
    }
};

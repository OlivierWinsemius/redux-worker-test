/* eslint-disable import/prefer-default-export */
import { sha256 } from 'js-sha256';

const DIFFICULTY = 4;

function getChain(blocks, highestBlock) {
    if (highestBlock.parentHash === 'root') {
        return [highestBlock];
    }
    return [highestBlock, ...getChain(blocks, blocks[highestBlock.parentHash])];
}

export class Block {
    constructor(parent) {
        this.parentHash = parent.hash;
        this.height = parent.height + 1 || 0;
        this.hash = this.calculateHash();
    }

    isValid() {
        return (
            (this.parentHash === 'root') ||
            (this.hash.substr(0, DIFFICULTY) === '0'.repeat(DIFFICULTY))
        );
    }

    calculateHash(nonce = '') {
        return sha256(nonce + this.parentHash).toString();
    }

    setHash() {
        while (!this.isValid()) {
            this.hash = this.calculateHash(sha256(Math.random().toString(36)).toString());
        }
        return this;
    }
}

export function getLongestChain(blocks) {
    const blocksArray = Object.values(blocks);
    const highestBlock = blocksArray.reduce(
        (previous, current) =>
            (previous.height > current.height ?
                previous : current),
        blocksArray[0],
    );

    return getChain(blocks, highestBlock).reverse();
}

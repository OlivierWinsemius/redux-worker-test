/* eslint-disable import/no-duplicates */
import React from 'react';
import SortableTree from 'react-sortable-tree';
import { getTreeFromFlatData } from 'react-sortable-tree';
import { getLongestChain } from '../../../utils/blockchain';

export default class Blockchain extends React.Component {
    state = { treeData: null }

    setTreeData = treeData => this.setState({ treeData })

    addBlockFrom = parent => () => {
        const { useWebWorker } = this.state;
        this.props.addBlockFromParent(parent);
    }

    generateNodeProps = longestChain => ({ node }) => ({
        className: longestChain.find(block => block.hash === node.hash) ?
            'longest' : '',
        buttons: [
            <button key="add" onClick={this.addBlockFrom(node)}>add</button>,
        ],
        node: {
            title: `Block ${node.hash.substr(0, 10)}`,
            subtitle: `Height ${node.height}`,
            children: node.children,
            expanded: true,
        },
    })

    render() {
        const longestChain = getLongestChain(this.props.blockchain.blocks);
        const treeData = getTreeFromFlatData({
            flatData: Object.values(this.props.blockchain.blocks)
                .map(node => ({ ...node, expanded: true })),
            getKey: block => block.hash,
            getParentKey: block => block.parentHash,
            rootKey: 'root',
        });

        return (
            <SortableTree
                canDrag={false}
                treeData={treeData}
                onChange={this.setTreeData}
                generateNodeProps={this.generateNodeProps(longestChain)}
            />
        );
    }
}

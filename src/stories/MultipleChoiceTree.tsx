import React from 'react';
import { MultipleChoice } from './MultipleChoice';

export interface MultipleChoiceTreeNodeId {
    id: string;
}

interface Choice {
    choiceId: string;
    choiceText: string;
    onClick?: (choiceId: string) => void;
    nextNodeId: MultipleChoiceTreeNodeId;
}

export interface MultipleChoiceTreeNode {
    nodeId: MultipleChoiceTreeNodeId;
    headerText: string;
    choices: Array<Choice>;
}

export interface MultipleChoiceTreeProps {
    initialNode: MultipleChoiceTreeNodeId;
    nodes: Array<MultipleChoiceTreeNode>;
}

interface MultipleChoiceTreeStates {
    curNodeId: MultipleChoiceTreeNodeId;
}

function findMultipleChoiceTreeNode(nodes: Array<MultipleChoiceTreeNode>, id: MultipleChoiceTreeNodeId): MultipleChoiceTreeNode {
    for (let i = 0; i < nodes.length; ++i) {
        if (nodes[i].nodeId.id === id.id) {
            return nodes[i];
        }
    }
    throw new Error("node not found");
}

export class MultipleChoiceTree extends React.Component<MultipleChoiceTreeProps, MultipleChoiceTreeStates> {
    state: MultipleChoiceTreeStates = {
        curNodeId: this.props.initialNode,
    };

    render() {
        let node = findMultipleChoiceTreeNode(this.props.nodes, this.state.curNodeId);
        let choices = node.choices.map(({ choiceId, choiceText, onClick, nextNodeId }) => {
            let nextNode = findMultipleChoiceTreeNode(this.props.nodes, nextNodeId);
            return {
                choiceId: nextNode.nodeId.id,
                text: choiceText,
                onClick: () => {
                    if (onClick) {
                        onClick(choiceId);
                    }
                    this.setState({ curNodeId: nextNode.nodeId });
                }
            }
        });
        return (
            <MultipleChoice headerText={node.headerText} choices={choices} />
        );
    }
}

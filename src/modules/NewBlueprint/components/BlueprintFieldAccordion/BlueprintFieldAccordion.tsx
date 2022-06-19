import React from 'react';
import { Accordion } from '@mui/material';
import { AccordionSummary, AccordionDetails } from './components';
import { TreeNodeValue } from 'src/modules/NewBlueprint/NewBlueprint';

interface BlueprintFieldAccordionProps {
  treeNode: TreeNodeValue;
  addOrUpdateTreeNode: (isRoot: boolean, treeNode?: TreeNodeValue) => void;
  removeTreeNode: (treeNodeId: TreeNodeValue['id']) => void;
}

const BlueprintFieldAccordion = ({
  addOrUpdateTreeNode,
  removeTreeNode,
  treeNode,
}: BlueprintFieldAccordionProps) => {
  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    addOrUpdateTreeNode(true, {
      ...treeNode,
      name: event.target.value,
    });
  };

  const handleFieldRemoveClick = () => {
    removeTreeNode(treeNode.id);
  };

  return (
    <Accordion defaultExpanded TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary id={treeNode.id} name={treeNode.name} type={treeNode.type} />
      <AccordionDetails
        id={treeNode.id}
        name={treeNode.name}
        onFieldRemoveClick={handleFieldRemoveClick}
        onNameChange={handleNameChange}
      />
    </Accordion>
  );
};

export default BlueprintFieldAccordion;

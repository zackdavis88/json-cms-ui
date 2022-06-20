import React from 'react';
import { Accordion, SelectChangeEvent } from '@mui/material';
import { AccordionSummary, AccordionDetails } from './components';
import { TreeNodeValue, TreeNodeTypes } from 'src/modules/NewBlueprint/NewBlueprint';

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

  const handleTypeChange = (event: SelectChangeEvent) => {
    addOrUpdateTreeNode(true, {
      ...treeNode,
      type: event.target.value as TreeNodeTypes,
    });
  };

  const handleIsRequiredChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    addOrUpdateTreeNode(true, {
      ...treeNode,
      isRequired: event.target.checked,
    });
  };

  const handleIsIntegerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    addOrUpdateTreeNode(true, {
      ...treeNode,
      isInteger: event.target.checked,
    });
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const max = Number(event.target.value) < 0 ? 0 : Number(event.target.value);
    const min = max && max < treeNode.min ? max : treeNode.min;
    addOrUpdateTreeNode(true, {
      ...treeNode,
      min,
      max,
    });
  };

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const min = Number(event.target.value) < 0 ? 0 : Number(event.target.value);
    const max = min && min > treeNode.max ? min : treeNode.max;
    addOrUpdateTreeNode(true, {
      ...treeNode,
      min,
      max,
    });
  };

  const handleRegexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    addOrUpdateTreeNode(true, {
      ...treeNode,
      regex: event.target.value,
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
        type={treeNode.type}
        isRequired={treeNode.isRequired}
        isInteger={treeNode.isInteger}
        max={treeNode.max}
        min={treeNode.min}
        regex={treeNode.regex}
        onFieldRemoveClick={handleFieldRemoveClick}
        onNameChange={handleNameChange}
        onTypeChange={handleTypeChange}
        onIsRequiredChange={handleIsRequiredChange}
        onIsIntegerChange={handleIsIntegerChange}
        onMaxChange={handleMaxChange}
        onMinChange={handleMinChange}
        onRegexChange={handleRegexChange}
      />
    </Accordion>
  );
};

export default BlueprintFieldAccordion;

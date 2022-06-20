import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import { NewBlueprintLayout } from './layout';
import { BlueprintFieldAccordion } from './components';

export enum TreeNodeTypes {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
  ARRAY = 'ARRAY',
  OBJECT = 'OBJECT',
}

export interface TreeNodeValue {
  id: string;
  parentId?: string;
  name: string;
  type: TreeNodeTypes;
  isRequired: boolean;
  isInteger: boolean;
  regex: string;
  min: number;
  max: number;
  arrayOf?: string;
  children?: string[];
}

interface TreeNodeValues {
  [key: string]: TreeNodeValue | undefined;
}

const NewBlueprint = () => {
  const theme = useTheme();
  const [rootNodes, setRootNodes] = React.useState<string[]>([]);
  const [treeNodeValues, setTreeNodeValues] = React.useState<TreeNodeValues>({});
  const focusInput = React.useRef<HTMLInputElement>();

  React.useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, []);

  const addOrUpdateTreeNode = (isRoot: boolean, treeNode?: TreeNodeValue) => {
    if (treeNode) {
      setTreeNodeValues({ ...treeNodeValues, [treeNode.id]: { ...treeNode } });
    } else {
      const newId = uuidv4();
      setTreeNodeValues({
        ...treeNodeValues,
        [newId]: {
          id: newId,
          name: '',
          type: TreeNodeTypes.STRING,
          isRequired: false,
          isInteger: false,
          regex: '',
          min: 0,
          max: 0,
        },
      });

      if (isRoot) {
        setRootNodes(rootNodes.concat(newId));
      }
    }
  };

  const removeTreeNode = (treeNodeId: TreeNodeValue['id']) => {
    setTreeNodeValues({ ...treeNodeValues, [treeNodeId]: undefined });
    const rootIndex = rootNodes.indexOf(treeNodeId);
    if (rootIndex !== -1) {
      const newRootNodes = [...rootNodes];
      newRootNodes.splice(rootIndex, 1);
      setRootNodes(newRootNodes);
    }
  };

  return (
    <NewBlueprintLayout
      nameInputRef={focusInput}
      onAddFieldClick={addOrUpdateTreeNode}
      isRoot
    >
      {rootNodes.map((nodeId) => {
        const nodeValues = treeNodeValues[nodeId];
        return nodeValues ? (
          <Box
            key={nodeId}
            marginBottom={theme.spacing(2)}
            maxWidth={`${theme.breakpoints.values.md}px`}
          >
            <BlueprintFieldAccordion
              treeNode={nodeValues}
              addOrUpdateTreeNode={addOrUpdateTreeNode}
              removeTreeNode={removeTreeNode}
            />
          </Box>
        ) : null;
      })}
    </NewBlueprintLayout>
  );
};

export default NewBlueprint;

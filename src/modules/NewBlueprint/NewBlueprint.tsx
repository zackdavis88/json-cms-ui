import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Divider,
  Button,
  TextField,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFloppyDisk,
  faPlus,
  faTrash,
  faArrowLeft,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { ROUTES } from 'src/constants';
import { v4 as uuidv4 } from 'uuid';

enum TreeNodeTypes {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
  ARRAY = 'ARRAY',
  OBJECT = 'OBJECT',
}

interface TreeNodeValue {
  id: string;
  name: string;
  type: TreeNodeTypes;
  isRequired?: boolean;
  isInteger?: boolean;
  min?: number;
  max?: number;
  arrayOf?: string;
  children?: string[];
}

interface TreeNodeValues {
  [key: string]: TreeNodeValue | undefined;
}

const BlueprintCreate = () => {
  const theme = useTheme();
  const [rootNodes, setRootNodes] = React.useState<string[]>([]);
  const [treeNodeValues, setTreeNodeValues] = React.useState<TreeNodeValues>({});
  const focusInput = React.useRef<HTMLInputElement>();

  React.useEffect(() => {
    if (focusInput.current) {
      focusInput.current.focus();
    }
  }, []);

  const addOrUpdateTreeNode = (isRoot: boolean, treeNode: TreeNodeValue) => {
    setTreeNodeValues({ ...treeNodeValues, [treeNode.id]: { ...treeNode } });
    const isAddingTreeNode = !treeNodeValues[treeNode.id];
    if (isAddingTreeNode && isRoot) {
      setRootNodes(rootNodes.concat(treeNode.id));
    }
  };

  const removeTreeNode = (isRoot: boolean, treeNodeId: TreeNodeValue['id']) => {
    setTreeNodeValues({ ...treeNodeValues, [treeNodeId]: undefined });
    const rootIndex = rootNodes.indexOf(treeNodeId);
    if (isRoot && rootIndex !== -1) {
      const newRootNodes = [...rootNodes];
      newRootNodes.splice(rootIndex, 1);
      setRootNodes(newRootNodes);
    }
  };

  return (
    <>
      <Box paddingTop={theme.spacing(2)} paddingX={theme.spacing(1)}>
        <Typography component="h4" variant="h5" display="block">
          New Blueprint
        </Typography>
        <StyledDivider />
        <ActionsContainer>
          <Button variant="contained">
            <Box component="span" marginRight={theme.spacing(1)}>
              <FontAwesomeIcon icon={faFloppyDisk} fixedWidth size="sm" />
            </Box>
            Save
          </Button>
          <Link href={ROUTES.BLUEPRINTS}>
            <Button variant="outlined" href={ROUTES.BLUEPRINTS}>
              <Box component="span" marginRight={theme.spacing(1)}>
                <FontAwesomeIcon icon={faArrowLeft} fixedWidth size="sm" />
              </Box>
              Cancel
            </Button>
          </Link>
        </ActionsContainer>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        paddingX={theme.spacing(1)}
        paddingTop={theme.spacing(3)}
        width="100%"
      >
        <Box width="100%" marginBottom={theme.spacing(3)}>
          <TextField
            id="blueprint-name"
            label="Blueprint Name"
            variant="filled"
            type="text"
            fullWidth
            required
            inputProps={{ maxLength: 100 }}
            inputRef={focusInput}
          />
        </Box>
        <Box>
          <Typography variant="h6" display="block">
            Fields
          </Typography>
          <StyledDivider />
          <Button
            variant="contained"
            color="success"
            onClick={() =>
              addOrUpdateTreeNode(true, {
                id: uuidv4(),
                name: '',
                type: TreeNodeTypes.STRING,
              })
            }
          >
            <Box component="span" marginRight={theme.spacing(1)}>
              <FontAwesomeIcon icon={faPlus} fixedWidth size="sm" />
            </Box>
            Add Field
          </Button>
          <Box marginTop={theme.spacing(3)}>
            {rootNodes.map((nodeId) => {
              const nodeValues = treeNodeValues[nodeId];
              return nodeValues ? (
                <Box key={nodeId} marginBottom={theme.spacing(2)}>
                  <Accordion
                    defaultExpanded={true}
                    TransitionProps={{ unmountOnExit: true }}
                  >
                    <AccordionSummary
                      sx={{
                        '& > .MuiAccordionSummary-content': {
                          overflow: 'hidden',
                        },
                        '&.Mui-expanded': {
                          backgroundColor: theme.palette.secondary.main,
                        },
                        '&.hasError': {
                          backgroundColor: theme.palette.error.main,
                        },
                      }}
                      expandIcon={
                        <FontAwesomeIcon icon={faChevronDown} fixedWidth size="sm" />
                      }
                      aria-controls={`${nodeId}-content`}
                      id={`${nodeId}-header`}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        width="100%"
                      >
                        <Typography
                          variant="body1"
                          textOverflow="ellipsis"
                          overflow="hidden"
                        >
                          {nodeValues.name ? nodeValues.name : 'ENTER A FIELD NAME'}
                        </Typography>
                        <Typography variant="caption">{nodeValues.type}</Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        display="flex"
                        flexDirection="column"
                        marginTop={theme.spacing(2)}
                      >
                        <TextField
                          id={`${nodeValues.id}-name`}
                          label="Field Name"
                          variant="filled"
                          type="text"
                          fullWidth
                          required
                          inputProps={{ maxLength: 100 }}
                          autoFocus
                          value={nodeValues.name}
                          onChange={(event) =>
                            addOrUpdateTreeNode(true, {
                              ...nodeValues,
                              name: event.target.value,
                            })
                          }
                        />
                        <Box marginTop={theme.spacing(2)}>
                          <Button
                            variant="outlined"
                            color="error"
                            onClick={() => removeTreeNode(true, nodeValues.id)}
                          >
                            <Box component="span" marginRight={theme.spacing(1)}>
                              <FontAwesomeIcon icon={faTrash} fixedWidth size="sm" />
                            </Box>
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ) : null;
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  'button:nth-of-type(1)': {
    marginRight: theme.spacing(1),
  },
  'button:nth-of-type(2)': {
    marginRight: theme.spacing(1),
  },
}));

export default BlueprintCreate;

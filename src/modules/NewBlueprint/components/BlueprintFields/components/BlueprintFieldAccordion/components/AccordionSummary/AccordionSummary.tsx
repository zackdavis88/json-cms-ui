import React from 'react';
import { AccordionSummary as MUIAccordionSummary, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BlueprintField } from 'src/store/actions';

interface AccordionSummaryProps {
  id: BlueprintField['id'];
  name: BlueprintField['name'];
  type: BlueprintField['type'];
}

const AccordionSummary = ({ id, name, type }: AccordionSummaryProps) => {
  return (
    <StyledAccordionSummary
      expandIcon={<FontAwesomeIcon icon={faChevronDown} fixedWidth size="sm" />}
      aria-controls={`${id}-content`}
      id={`${id}-header`}
    >
      <Box
        display="flex"
        flexDirection="column"
        whiteSpace="nowrap"
        overflow="hidden"
        width="100%"
      >
        <Typography variant="body1" textOverflow="ellipsis" overflow="hidden">
          {name ? name : 'ENTER A FIELD NAME'}
        </Typography>
        <Typography variant="caption">{type}</Typography>
      </Box>
    </StyledAccordionSummary>
  );
};

const StyledAccordionSummary = styled(MUIAccordionSummary)(({ theme }) => ({
  '& > .MuiAccordionSummary-content': {
    overflow: 'hidden',
  },
  '&.Mui-expanded': {
    backgroundColor: theme.palette.secondary.main,
  },
  '&.hasError': {
    backgroundColor: theme.palette.error.main,
  },
}));

export default AccordionSummary;

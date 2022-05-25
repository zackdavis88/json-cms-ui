import React from 'react';
import { Button, Typography } from '@mui/material';
import { ActionsContainer } from './components';

interface ActionButtonsProps {
  handleCancel: () => void;
  submitDisabled: boolean;
}

const ActionButtons = ({ handleCancel, submitDisabled }: ActionButtonsProps) => {
  return (
    <ActionsContainer>
      <Button type="submit" variant="contained" disabled={submitDisabled}>
        <Typography component="span" typography="button" fontWeight="bold">
          Submit
        </Typography>
      </Button>

      <Button variant="outlined" onClick={handleCancel}>
        <Typography component="span" typography="button">
          Cancel
        </Typography>
      </Button>
    </ActionsContainer>
  );
};

export default ActionButtons;

import React from 'react';
import { Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ActionsContainer } from './components';

interface ActionButtonsProps {
  onBackClick: () => void;
  submitDisabled: boolean;
}

const ActionButtons = ({ onBackClick, submitDisabled }: ActionButtonsProps) => {
  return (
    <ActionsContainer>
      <Button type="submit" variant="contained" fullWidth disabled={submitDisabled}>
        <Typography component="span" typography="button">
          <FontAwesomeIcon icon={faUserPlus} fixedWidth /> Sign Up
        </Typography>
      </Button>
      <Button variant="outlined" fullWidth onClick={onBackClick}>
        <Typography component="span" typography="button">
          <FontAwesomeIcon icon={faArrowLeft} fixedWidth /> Back
        </Typography>
      </Button>
    </ActionsContainer>
  );
};

export default ActionButtons;

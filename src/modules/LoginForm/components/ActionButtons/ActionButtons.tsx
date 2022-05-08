import React from 'react';
import { Button, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ActionsContainer } from './components';

interface ActionButtonsProps {
  submitDisabled: boolean;
}

const ActionButtons = ({ submitDisabled }: ActionButtonsProps) => {
  return (
    <ActionsContainer>
      <Button type="submit" variant="contained" fullWidth disabled={submitDisabled}>
        <Typography component="span" typography="button">
          <FontAwesomeIcon icon={faRightToBracket} fixedWidth /> Login
        </Typography>
      </Button>
      <Button variant="outlined" fullWidth>
        <Typography component="span" typography="button">
          <FontAwesomeIcon icon={faUserPlus} fixedWidth /> Sign Up
        </Typography>
      </Button>
    </ActionsContainer>
  );
};

export default ActionButtons;

import React from 'react';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <IconButton disableTouchRipple onClick={onClick} color="inherit">
      <FontAwesomeIcon icon={faClose} size="sm" fixedWidth />
    </IconButton>
  );
};

export default CloseButton;

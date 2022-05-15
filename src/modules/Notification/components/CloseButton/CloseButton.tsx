import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface CloseButtonProps {
  onClick: () => void;
}

const StyledIconButton = styled(IconButton)(() => ({
  color: 'inherit',
}));

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <StyledIconButton disableTouchRipple onClick={onClick}>
      <FontAwesomeIcon icon={faClose} size="sm" fixedWidth />
    </StyledIconButton>
  );
};

export default CloseButton;

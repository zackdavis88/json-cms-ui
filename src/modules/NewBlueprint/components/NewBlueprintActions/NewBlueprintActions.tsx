import React from 'react';
import { Button, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { ROUTES } from 'src/constants';
import { useTheme } from '@mui/material/styles';
import { ActionsContainer } from 'src/modules/NewBlueprint/components';

interface HeaderActionsProps {
  handleBackdropOpen: () => void;
}

const HeaderActions = ({ handleBackdropOpen }: HeaderActionsProps) => {
  const theme = useTheme();
  return (
    <ActionsContainer>
      <Button variant="contained" onClick={handleBackdropOpen}>
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
  );
};

export default HeaderActions;

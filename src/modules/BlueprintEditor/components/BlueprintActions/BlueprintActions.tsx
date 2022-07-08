import React from 'react';
import { Button, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { ROUTES } from 'src/constants';
import { useTheme } from '@mui/material/styles';
import {
  ActionsContainer,
  ValidationBackdrop,
} from 'src/modules/BlueprintEditor/components';

const BlueprintActions = () => {
  const theme = useTheme();
  const [backdropIsOpen, setBackdropIsOpen] = React.useState(false);

  const closeValidationBackdrop = () => setBackdropIsOpen(false);

  const openValidationBackdrop = () => setBackdropIsOpen(true);

  return (
    <>
      <ActionsContainer>
        <Button variant="contained" onClick={openValidationBackdrop}>
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
      {backdropIsOpen && (
        <ValidationBackdrop onAfterValidation={closeValidationBackdrop} />
      )}
    </>
  );
};

export default BlueprintActions;

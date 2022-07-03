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
} from 'src/modules/NewBlueprint/components';
import {
  useDispatchUpdateBlueprintNameError,
  useDispatchUpdateBlueprintFieldError,
} from 'src/hooks';
import { BlueprintField } from 'src/store/actions';

const NewBlueprintActions = () => {
  const theme = useTheme();
  const [backdropIsOpen, setBackdropIsOpen] = React.useState(false);
  const updateBlueprintNameError = useDispatchUpdateBlueprintNameError();
  const updateBlueprintFieldError = useDispatchUpdateBlueprintFieldError();

  const handleValidationError = (errorMessage: string | BlueprintField) => {
    if (typeof errorMessage === 'string') {
      updateBlueprintNameError(errorMessage);
    } else {
      updateBlueprintFieldError(errorMessage);
    }

    setBackdropIsOpen(false);
  };

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
      {backdropIsOpen && <ValidationBackdrop onValidationError={handleValidationError} />}
    </>
  );
};

export default NewBlueprintActions;

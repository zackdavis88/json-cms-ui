import React from 'react';
import { Box, Collapse } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import { NavigationSidebarListItemButton } from 'src/modules/Navbar/components/NavigationSidebar/components';
import { useDispatchSignOut } from 'src/hooks';

interface CollapsibleActionsProps {
  handleClose: () => void;
  isOpen: boolean;
}

const CollapsibleActions = ({ handleClose, isOpen }: CollapsibleActionsProps) => {
  const theme = useTheme();
  const signOut = useDispatchSignOut();
  const handleSignOut = React.useCallback(() => {
    signOut();
    handleClose();
  }, [handleClose, signOut]);
  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <Box component="ul" margin="0" padding="0">
        <NavigationSidebarListItemButton
          handleClose={handleClose}
          onClick={() => {
            console.log('Change Password Clicked');
            handleClose();
          }}
          labelDisplay="flex"
          labelAlignItems="center"
          labelJustifyContent="flex-start"
          inset={1}
        >
          <Box component="span" marginRight={theme.spacing(1)}>
            <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
          </Box>
          Change Password
        </NavigationSidebarListItemButton>
        <NavigationSidebarListItemButton
          handleClose={handleClose}
          onClick={handleSignOut}
          labelDisplay="flex"
          labelAlignItems="center"
          labelJustifyContent="flex-start"
          inset={1}
        >
          <Box component="span" marginRight={theme.spacing(1)}>
            <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
          </Box>
          Sign Out
        </NavigationSidebarListItemButton>
      </Box>
    </Collapse>
  );
};

export default CollapsibleActions;

import React from 'react';
import { useTheme } from '@mui/material/styles';
import { NavigationSidebarListItemButton } from 'src/modules/Navbar/components/NavigationSidebar/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { CollapsibleActions } from './components';

interface UserActionsProps {
  handleClose: () => void;
  onPasswordChangeModalOpen: () => void;
}

const UserActions = ({ handleClose, onPasswordChangeModalOpen }: UserActionsProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <NavigationSidebarListItemButton
      handleClose={handleClose}
      onClick={() => setIsOpen(!isOpen)}
      labelDisplay="flex"
      labelAlignItems="center"
      labelJustifyContent="space-between"
      labelPaddingRight={theme.spacing(1)}
      nestedList={
        <CollapsibleActions
          isOpen={isOpen}
          handleClose={handleClose}
          onPasswordChangeModalOpen={onPasswordChangeModalOpen}
        />
      }
    >
      My Account
      <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown}></FontAwesomeIcon>
    </NavigationSidebarListItemButton>
  );
};

export default UserActions;

import React from 'react';
import { useCurrentUser, useDispatchSignOut } from 'src/hooks';
import { PopoverMenu, Hidden } from 'src/components';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faKey,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

interface UserMenuProps {
  onPasswordChangeModalOpen: () => void;
}

const UserMenu = ({ onPasswordChangeModalOpen }: UserMenuProps) => {
  const theme = useTheme();
  const user = useCurrentUser();
  const signOut = useDispatchSignOut();
  const isAuthenticated = !!user;
  const userMenuItems = [
    {
      startIcon: <FontAwesomeIcon icon={faKey} fixedWidth />,
      label: 'Change Password',
      onClick: onPasswordChangeModalOpen,
    },
    {
      startIcon: <FontAwesomeIcon icon={faRightFromBracket} fixedWidth />,
      label: 'Sign Out',
      onClick: signOut,
    },
  ];

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Hidden hiddenOn="lgDown">
      <PopoverMenu items={userMenuItems}>
        <Box component="span" width="100%" display="inline-flex" fontWeight="bold">
          {user.displayName}
          <Box component="span" marginLeft={theme.spacing(1)}>
            <FontAwesomeIcon icon={faCaretDown} fixedWidth size="lg" />
          </Box>
        </Box>
      </PopoverMenu>
    </Hidden>
  );
};

export default UserMenu;

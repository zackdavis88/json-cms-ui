import React from 'react';
import { Box } from '@mui/material';
import { NavbarLayout } from './layout';
import { Brand, NavigationButtons, UserMenu, ChangePasswordModal } from './components';

const Navbar = () => {
  const [passwordChangeModalIsOpen, setPasswordChangeModalIsOpen] =
    React.useState<boolean>(false);

  const handlePasswordChangeModalOpen = () => setPasswordChangeModalIsOpen(true);
  return (
    <>
      <NavbarLayout>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
        >
          <NavigationButtons onPasswordChangeModalOpen={handlePasswordChangeModalOpen} />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="auto"
        >
          <Brand />
        </Box>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
        >
          <UserMenu onPasswordChangeModalOpen={handlePasswordChangeModalOpen} />
        </Box>
      </NavbarLayout>
      <ChangePasswordModal
        isOpen={passwordChangeModalIsOpen}
        onClose={() => setPasswordChangeModalIsOpen(false)}
      />
    </>
  );
};

export default Navbar;

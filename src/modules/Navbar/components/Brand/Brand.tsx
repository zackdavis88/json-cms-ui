import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Hidden } from 'src/components';
import { ROUTES } from 'src/constants';
import Link from 'next/link';
import { useCurrentUser } from 'src/hooks';

const Brand = () => {
  const theme = useTheme();
  const user = useCurrentUser();
  const isAuthenticated = !!user;
  return (
    <Link href={isAuthenticated ? ROUTES.HOME : ROUTES.SIGN_IN}>
      <StyledButton
        href={isAuthenticated ? ROUTES.HOME : ROUTES.SIGN_IN}
        disableTouchRipple
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          lineHeight={`${theme.mixins.toolbar.height}px`}
          display="inline-flex"
        >
          <Box component="span" marginRight={theme.spacing(1)}>
            <Hidden hiddenOn="smDown">
              <FontAwesomeIcon icon={faCode} fixedWidth />
            </Hidden>
          </Box>
          JSON&nbsp;CMS
        </Typography>
      </StyledButton>
    </Link>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  height: '100%',
  color: theme.palette.common.white,
  padding: 0,
  borderRadius: 0,
}));

export default Brand;

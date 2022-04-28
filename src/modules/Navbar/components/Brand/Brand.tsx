import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { Hidden } from 'src/components';
import Link from 'next/link';

const Brand = () => {
  const theme = useTheme();
  return (
    <Link href="/">
      <Typography
        variant="h4"
        component="a"
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
    </Link>
  );
};

export default Brand;

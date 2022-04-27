import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Brand = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        lineHeight={`${theme.mixins.toolbar.height}px`}
        display="inline-flex"
      >
        <Box component="span" marginRight={theme.spacing(1)}>
          <FontAwesomeIcon icon={faCode} fixedWidth />
        </Box>
        JSON&nbsp;CMS
      </Typography>
    </>
  );
};

export default Brand;

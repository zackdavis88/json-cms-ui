import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavigationSidebarButton } from 'src/modules/Navbar/components/NavigationSidebar/NavigationSidebarButton';

interface NavigationSidebarListItemButtonProps {
  children: React.ReactNode;
  handleClose: () => void;
  href?: string;
  inset?: number;
  labelDisplay?: string;
  labelAlignItems?: string;
  labelJustifyContent?: string;
  labelPaddingRight?: string;
  nestedList?: React.ReactNode;
  onClick?: () => void;
}

const NavigationSidebarListItemButton = ({
  children,
  handleClose,
  href,
  inset = 0,
  labelAlignItems,
  labelDisplay,
  labelJustifyContent,
  labelPaddingRight,
  nestedList,
  onClick,
}: NavigationSidebarListItemButtonProps) => {
  const theme = useTheme();
  const defaultPaddingLeft = theme.spacing(3);
  const insetPaddingLeft = theme.spacing(1 * inset);
  const buttonPaddingLeft = `calc(${defaultPaddingLeft} + ${insetPaddingLeft})`;

  return (
    <Box
      component="li"
      display="block"
      role="listitem"
      height="48px"
      marginBottom={theme.spacing(1)}
    >
      <NavigationSidebarButton onClick={onClick ?? handleClose} href={href}>
        <Box
          component="span"
          width="100%"
          alignItems={labelAlignItems}
          display={labelDisplay}
          justifyContent={labelJustifyContent}
          paddingLeft={buttonPaddingLeft}
          paddingRight={labelPaddingRight}
        >
          {children}
        </Box>
      </NavigationSidebarButton>
      {nestedList}
    </Box>
  );
};

export default NavigationSidebarListItemButton;

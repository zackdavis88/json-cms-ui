import React from 'react';
import { Box, Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Menu } from './components';

export interface MenuItemProps {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
  closeOnClick?: boolean;
}

interface PopoverMenuProps extends ButtonProps {
  items: MenuItemProps[];
}

const PopoverMenu = ({
  children: buttonChildren,
  id: buttonId,
  items,
}: PopoverMenuProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement>();
  const menuId = `${buttonId}-muimenu`;

  return (
    <Box display="inline" padding="0" margin="0">
      <StyledButton
        id={buttonId}
        aria-controls={isOpen ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={() => setIsOpen(!isOpen)}
        disableTouchRipple
        ref={(element) => {
          if (element && !buttonRef.current) {
            buttonRef.current = element;
          }
        }}
      >
        {buttonChildren}
      </StyledButton>
      <Menu
        id={menuId}
        anchorEl={buttonRef.current}
        open={isOpen}
        items={items}
        onClose={() => setIsOpen(false)}
        MenuListProps={{
          'aria-labelledby': buttonId,
        }}
      />
    </Box>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: 'none',
}));

export default PopoverMenu;

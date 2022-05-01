import React from 'react';
import { Menu as MUIMenu, MenuProps as MUIMenuProps, MenuItem, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MenuItemProps } from 'src/components/PopoverMenu/PopoverMenu';

interface MenuProps extends MUIMenuProps {
  items: MenuItemProps[];
}

type HandleItemClick = (
  onClick: MenuItemProps['onClick'],
  closeOnClick?: MenuItemProps['closeOnClick'],
) => () => void;

const Menu = ({
  id,
  anchorEl,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  transformOrigin = { vertical: 'top', horizontal: 'right' },
  open,
  onClose,
  MenuListProps,
  items,
}: MenuProps) => {
  const theme = useTheme();
  const handleItemClick = React.useCallback<HandleItemClick>(
    (onClick, closeOnClick = true) =>
      () => {
        if (onClick) {
          onClick();
        }

        if (closeOnClick && onClose) {
          onClose({}, 'backdropClick');
        }
      },
    [onClose],
  );
  return (
    <MUIMenu
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={MenuListProps}
    >
      {items.map(({ startIcon, endIcon, label, onClick, closeOnClick }, index) => (
        <MenuItem key={index} onClick={handleItemClick(onClick, closeOnClick)}>
          {startIcon && (
            <Box component="span" marginRight={theme.spacing(1)}>
              {startIcon}
            </Box>
          )}
          {label}
          {endIcon && (
            <Box component="span" marginLeft={theme.spacing(1)}>
              {endIcon}
            </Box>
          )}
        </MenuItem>
      ))}
    </MUIMenu>
  );
};

export default Menu;

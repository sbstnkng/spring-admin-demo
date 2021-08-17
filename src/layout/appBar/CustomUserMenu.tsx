import { forwardRef } from 'react';
import { UserMenu, MenuItemLink } from 'react-admin';
import PersonIcon from '@material-ui/icons/Person';

const ConfigurationMenu = forwardRef<any, any>((props, ref) => {
  return (
    <MenuItemLink
      ref={ref}
      to="/profile"
      primaryText="Profile"
      leftIcon={<PersonIcon />}
      onClick={props.onClick}
      sidebarIsOpen
    />
  );
});

const CustomUserMenu = (props: any) => (
  <UserMenu {...props}>
    <ConfigurationMenu />
  </UserMenu>
);

export default CustomUserMenu;

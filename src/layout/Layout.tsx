import { FC } from 'react';
import { Layout as RaLayout, LayoutProps, Sidebar } from 'react-admin';
import { AppBar } from './appBar/AppBar';
import { lightTheme } from './themes';
import { Notification } from './notification/Notification';

const CustomSideBar = (props: any) => <Sidebar {...props} size={200} />;

export const Layout: FC = (props: LayoutProps) => {
  return (
    <RaLayout
      {...props}
      appBar={AppBar}
      sidebar={CustomSideBar}
      theme={lightTheme}
      notification={Notification}
    />
  );
};

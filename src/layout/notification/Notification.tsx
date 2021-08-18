import { Notification as RaNotification } from 'react-admin';

export const Notification = (props: any) => (
  <RaNotification {...props} autoHideDuration={5000} />
);

import { List, SimpleList } from 'react-admin';

export const RepositoryList = (props: any) => {
  return (
    <List {...props}>
      <SimpleList primaryText={(record) => record.name} />
    </List>
  );
};

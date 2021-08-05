import { useMediaQuery } from '@material-ui/core';
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
} from 'react-admin';

export const PostList = (props: any) => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.vies} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

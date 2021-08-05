import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from 'react-admin';
import { PostTitle } from './PostTitle';

export const PostEdit = (props: any) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

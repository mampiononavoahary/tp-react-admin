import { List, Datagrid, TextField, Button, ReferenceField } from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" label={"numero"}/>
      <TextField source="title" label={"Titre"}/>
      <ReferenceField source="userId" label={"name"} reference={"users"} />
      {/* <TextField source="user.name" /> */}
      <Button label="Comments" />
    </Datagrid>
  </List>
);
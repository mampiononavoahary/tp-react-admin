import { List, Datagrid, TextField, Button } from "react-admin";

export const UserList = ({ edit }: { edit: () => any }) => {
    const handleclick =()=>{
edit()
    }
  return (
    <>
      <List>
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          {/* <TextField source="user.name" /> */}
          {/* <Button onClick="show"  label="show"/> */}
          <Button onClick={handleclick} label="edit" />
        </Datagrid>
      </List>
    </>
  );
};
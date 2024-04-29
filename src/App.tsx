import {
  Admin,
  Resource,
  // ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList } from "./post";
import { UserList } from "./user";
import { PostCreate } from "./CreatePost";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      recordRepresentation={"name"}
      edit={EditGuesser}
      show={ShowGuesser}
    ></Resource>
    <Resource
      name="posts"
      list={PostList}
      edit={EditGuesser}
      create={PostCreate}
    />
  </Admin>
);
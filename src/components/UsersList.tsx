import { Users } from "../models/users";
import { Button } from "./Button";
import { Trash } from "./Icons";
import "./userList.css";

interface Props {
  users: Users[];
  showColors: boolean;
  handleDelete: (id: string) => void;
  sortBy: (value: string) => void;
}

export function UserList({ users, showColors, handleDelete, sortBy }: Props) {
  return (
    <table className="table-user">
      <thead className="table-user-header">
        <tr>
          <th>foto</th>
          <th
            onClick={() => {
              sortBy("name");
            }}>
            nombre
          </th>
          <th
            onClick={() => {
              sortBy("last-name");
            }}>
            apellido
          </th>
          <th
            onClick={() => {
              sortBy("country");
            }}>
            pais
          </th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: Users, index: number) => {
          const backgroundColor = index % 2 === 0 ? "#333" : "#555";
          const color = showColors ? backgroundColor : "transparent";
          return (
            <tr key={index} style={{ backgroundColor: color }}>
              <td data-testing="user-img">
                <img
                  className="user-img-data"
                  src={user.picture}
                  alt={user.name}
                />
              </td>
              <td data-testing="user-name">{user.name}</td>
              <td data-testing="user-lastName">{user.name}</td>
              <td data-testing="user-country">{user.country}</td>
              <td data-testing="user-delete-button">
                <Button
                  className="delete"
                  onClick={() => {
                    handleDelete(user.loginID);
                  }}>
                  <div className="button-delete">
                    <Trash />
                    <p>borrar</p>
                  </div>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

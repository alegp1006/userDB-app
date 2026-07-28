import { Users } from "../models/users";

interface Props {
  users: Users[];
  showColors: boolean;
  handleDelete: (id: string) => void;
  sortBy: (value: string) => void;
}

export function UserList({ users, showColors, handleDelete, sortBy }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>foto</th>
          <th
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              sortBy("name");
            }}>
            nombre
          </th>
          <th
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              sortBy("last-name");
            }}>
            apellido
          </th>
          <th
            style={{
              cursor: "pointer",
            }}
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
                <img src={user.picture} alt={user.name} />
              </td>
              <td data-testing="user-name">{user.name}</td>
              <td data-testing="user-lastName">{user.name}</td>
              <td data-testing="user-country">{user.country}</td>
              <td data-testing="user-delete-button">
                <button
                  onClick={() => {
                    handleDelete(user.loginID);
                  }}>
                  borrar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

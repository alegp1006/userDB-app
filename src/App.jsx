import "./App.css";
import { UserList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";
import { useSwitchColors } from "./hooks/useSwitchColors";
import { useSortByCountry } from "./hooks/useSortByCountry";
import { useFilterCountry } from "./hooks/useFilterCountry";
import { useSortBy } from "./hooks/useSortBy";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  const { user, setUser, handleReset } = useUsers();
  const { showColors, toogleColors } = useSwitchColors();
  const { filteredUser, filterCountry, setFilterCountry } =
    useFilterCountry(user);
  const { sortedUser, sortByCountry, toogleSortByCountry } =
    useSortByCountry(filteredUser);
  const { handleSort, sortedUserByValue } = useSortBy(sortedUser);

  const handleDelete = (id) => {
    const filteredUser = user.filter((u) => {
      return u.loginID !== id;
    });
    setUser(filteredUser);
  };

  return (
    <>
      <h1>Base de datos de Usuarios</h1>

      <Button onClick={toogleColors} content={"colorear filas"} />
      <Button
        onClick={toogleSortByCountry}
        content={sortByCountry ? "Desordenar por pais" : "ordenar por pais"}
      />
      <Button onClick={handleReset} content={"restablecer lista"} />
      <Input value={filterCountry} setValue={setFilterCountry} />
      <UserList
        sortBy={handleSort}
        handleDelete={handleDelete}
        showColors={showColors}
        users={sortedUserByValue}
      />
    </>
  );
}

export default App;

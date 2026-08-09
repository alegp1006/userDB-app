import "./App.css";
import { UserList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";
import { useSwitchColors } from "./hooks/useSwitchColors";
import { useSortByCountry } from "./hooks/useSortByCountry";
import { useFilterCountry } from "./hooks/useFilterCountry";
import { useSortBy } from "./hooks/useSortBy";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Paint, Restore, UpDownArrow, World } from "./components/Icons";

function App() {
  const { user, setUser, handleReset } = useUsers();
  const { showColors, toogleColors } = useSwitchColors();
  const { filteredUser, filterCountry, setFilterCountry } =
    useFilterCountry(user);
  const { sortedUser, sortByCountry, toogleSortByCountry } =
    useSortByCountry(filteredUser);
  const { handleSort, sortedUserByValue } = useSortBy(sortedUser);

  const handleDelete = (id: string) => {
    const filteredUser = user.filter((u) => {
      return u.loginID !== id;
    });
    setUser(filteredUser);
  };

  return (
    <main className="main">
      <h1>Base de datos de Usuarios</h1>
      <header className="header">
        <Input value={filterCountry ?? ""} setValue={setFilterCountry} />
        <Button onClick={toogleColors}>
          <div className="button-color">
            <Paint width="24px" height="24px" />
            <p>colorear filas</p>
          </div>
        </Button>
        <Button onClick={toogleSortByCountry}>
          <div className="button-country">
            <UpDownArrow />
            <p>{sortByCountry ? "Desordenar por pais" : "ordenar por pais"}</p>
            <World />
          </div>
        </Button>
        <Button onClick={handleReset}>
          <div className="button-reset">
            <Restore />
            <p>restablecer lista</p>
          </div>
        </Button>
      </header>

      <UserList
        sortBy={handleSort}
        handleDelete={handleDelete}
        showColors={showColors}
        users={sortedUserByValue}
      />
    </main>
  );
}

export default App;

import { useRef } from "react";
import { Users } from "../models/users";
import { getUsers } from "../services/users";
import { useFetch } from "./useFetch";
import { useStateLocalStorage } from "./useStateLocalStorage";

export function useUsers() {
  const [user, setUser] = useStateLocalStorage<Users[]>({
    key: "user",
    initialValue: [],
  });
  const { loading, error } = useFetch(getUsers, user, setUser);

  const originalUser = useRef(user);

  const handleReset = () => {
    setUser(originalUser.current);
  };

  return {
    user,
    loading,
    error,
    setUser,
    handleReset,
  };
}

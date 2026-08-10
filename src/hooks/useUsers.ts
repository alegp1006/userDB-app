import { useRef, useState } from "react";
import { Users } from "../models/users";
import { getUsers } from "../services/users";
import { useFetch } from "./useFetch";

export function useUsers() {
  const [user, setUser] = useState<Users[]>([]);
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

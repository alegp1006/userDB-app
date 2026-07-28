import { useEffect, useRef, useState } from "react";
import { Users } from "../models/users";
import { getUsers } from "../services/users";

export function useUsers() {
  const [user, setUser] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const originalUser = useRef(user);

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleReset = () => {
    setUser(originalUser.current);
  };

  const getAllUsers = async () => {
    try {
      setError(null);
      setLoading(true);
      const users = await getUsers();
      setUser(users);
      originalUser.current = users;
    } catch (error: any) {
      setError(`Eroor to get users ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    setUser,
    handleReset,
    getAllUsers,
  };
}

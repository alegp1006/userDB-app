import { useMemo, useState } from "react";
import { Users } from "../models/users";

export function useFilterCountry(user: Users[]) {
  const [filterCountry, setFilterCountry] = useState<string | null>("");

  const filteredUser = useMemo(() => {
    return typeof filterCountry === "string" && filterCountry.length > 0
      ? user.filter((users) => {
          return users.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase());
        })
      : user;
  }, [user, filterCountry]);

  return {
    filterCountry,
    setFilterCountry,
    filteredUser,
  };
}

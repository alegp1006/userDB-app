import { useMemo, useState } from "react";
import { useFilterCountry } from "./useFilterCountry";
import { Users } from "../models/users";

export function useSortByCountry(user: Users[]) {
  const [sortByCountry, setSortByCountry] = useState(false);

  const toogleSortByCountry = () => {
    setSortByCountry(!sortByCountry);
  };
  const sortedUser = useMemo(() => {
    return sortByCountry
      ? user.toSorted((a, b) => {
          return a.country.localeCompare(b.country);
        })
      : user;
  }, [user, sortByCountry]);

  return {
    sortedUser,
    sortByCountry,
    setSortByCountry,
    toogleSortByCountry,
  };
}

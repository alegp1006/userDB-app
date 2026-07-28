import { useMemo, useState } from "react";
import { Users } from "../models/users";

export function useSortBy(sortedUser: Users[]) {
  const [sortBy, setSortBy] = useState({
    isSorted: false,
    sortValue: "",
  });

  const handleSort = (value: string) => {
    setSortBy({
      isSorted: !sortBy.isSorted,
      sortValue: value,
    });
    console.log(sortBy);
  };

  const sortedUserByValue = useMemo(() => {
    let sortedUsersByValue = [];
    //sorted by name
    sortBy.isSorted
      ? sortBy.sortValue === "name"
        ? (sortedUsersByValue = sortedUser.toSorted((a, b) => {
            return a.name.localeCompare(b.name);
          }))
        : sortBy.sortValue === "last-name"
          ? (sortedUsersByValue = sortedUser.toSorted((a, b) => {
              return a.lastName.localeCompare(b.lastName);
            }))
          : sortBy.sortValue === "country"
            ? (sortedUsersByValue = sortedUser.toSorted((a, b) => {
                return a.country.localeCompare(b.country);
              }))
            : (sortedUsersByValue = sortedUser)
      : (sortedUsersByValue = sortedUser);

    return sortedUsersByValue;
  }, [sortedUser, sortBy]);

  return {
    sortBy,
    handleSort,
    sortedUser,
    sortedUserByValue,
  };
}

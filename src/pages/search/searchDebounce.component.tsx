/**
 * The search input is debounced by 500 milliseconds to optimize performance and reduce the number
 * of filter operations.
 */
import React, { useMemo } from "react";
import { useDebouncedCallback } from "use-debounce";

const fruitsData = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
export const SearchDebounceComponent = () => {
  const [search, setSearch] = React.useState<string>("");

  const debouncedUpdateSearch = useDebouncedCallback((search: string) => {
    setSearch(search);
  }, 500);

  const filterFruits = (search: string) => {
    return fruitsData.filter((fruit) =>
      fruit.toLowerCase().includes(search.toLowerCase())
    );
  };

  const fruits = useMemo(() => filterFruits(search), [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits"
        onChange={(e) => debouncedUpdateSearch(e.target.value)}
      />
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <div>Debounce value: {search}</div>
    </div>
  );
};

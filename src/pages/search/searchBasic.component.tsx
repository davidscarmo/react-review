/**
 * A basic search component that allows users to filter a list of fruits.
 * The `SearchBasicComponente` component uses the `useEffect` hook to update the fruit list based on the search input.
 */
import React, { useEffect } from "react";
const fruitsData = ["apple", "banana", "cherry", "date", "elderberry"];
export const SearchBasicComponente = () => {
  const [fruits, setFruits] = React.useState<string[]>(fruitsData);
  const [search, setSearch] = React.useState<string>("");
  const updateSearch = (search: string) => {
    setSearch(search);
  };
  useEffect(() => {
    const updateFruitList = (search: string) => {
      setFruits(
        fruitsData.filter((fruit) =>
          fruit.toLowerCase().includes(search.toLowerCase())
        )
      );
    };
    updateFruitList(search);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits"
        onChange={(e) => updateSearch(e.target.value)}
        value={search}
      />
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

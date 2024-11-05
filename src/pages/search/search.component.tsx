import React, { useMemo } from "react";

const fruitsData = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
export const SearchComponente = () => {
  const [search, setSearch] = React.useState<string>("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };
  const updateFruitList = (search: string) => {
    return fruitsData.filter((fruit) =>
      fruit.toLowerCase().includes(search.toLowerCase())
    );
  };

  const fruits = useMemo(() => updateFruitList(search), [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits"
        onChange={(e) => updateSearch(e.target.value)}
      />
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

import React, { useEffect } from "react";

const fruitsData = ["apple", "banana", "cherry", "date", "elderberry"];
export const SearchComponente = () => {
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
      />
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

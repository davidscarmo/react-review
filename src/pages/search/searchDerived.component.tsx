/** This component demonstrates a search functionality using derived state technique.
 * The `SearchDerivedComponent` allows users to search through a list of fruits.
 *  The search input updates the search state, that is responsible for derive the value to filter the list of fruits every re-render.
 */
import React, { useMemo } from "react";

const fruitsData = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
export const SearchDerivedComponent = () => {
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

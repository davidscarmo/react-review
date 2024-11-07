import { Link } from "react-router-dom";
import React from "react";

export const SearchComponent: React.FC = () => {
  return (
    <div>
      <h2>Search Navigation</h2>
      <nav>
        <ul>
          <li>
            <Link to="/search/basic">Basic Search</Link>
          </li>
          <li>
            <Link to="/search/debounce">Debounced Search</Link>
          </li>
          <li>
            <Link to="/search/derived">Derived State Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

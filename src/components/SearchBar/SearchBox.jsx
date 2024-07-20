import React, { useState } from "react";
import "./SearchBox.scss";
const SearchBox = () => {
  let types = ["buy", "rent"];
  let [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  let switchType = val => {
    setQuery(prev => ({ ...prev, type: val }));
    
  };
  return (
    <div className="SearchBar">
      <div className="Type">
        {types.map(t => (
          <button
           
            key={t}
            onClick={() => {
              switchType(t);
           }}
            className={query.type === t ? "active" : ""}
          >
            {t}
          </button>
        ))}
      </div>

      <form action="">
        <input type="text" name="" id="" placeholder="city location" />
        <input type="number" name="" id="" placeholder="min price" />
        <input type="number" name="" id="" placeholder="max price" />
        <button type="button">
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

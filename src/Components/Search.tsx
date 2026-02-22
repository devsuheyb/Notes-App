import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border focus:outline-none pl-2"
          type="text"
          placeholder="search"
        />
      </div>
    </div>
  );
};

export default Search;

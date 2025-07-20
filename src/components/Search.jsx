import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <component className="tex-white text-3xl">
      <div>
        <img src="search.svg" alt="search" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search through thousends of movies"
        />
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </component>
  );
};

export default Search;

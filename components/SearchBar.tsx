"use client";
import React from "react";
import { SearchManifacturer } from ".";

function SearchBar() {
  const [manufacturer, setManufacturer] = React.useState("");
  const handleSubmit = function () {};
  return (
    <form onSubmit={handleSubmit}>
      <div className="search__item">
        <SearchManifacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;

"use client";
import React, { ChangeEventHandler, FormEventHandler } from "react";
import { SearchManifacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="button" className={`z-10 -ml-3 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="maginfying-glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

function SearchBar() {
  const [manufacturer, setManufacturer] = React.useState("");
  const [model, setModel] = React.useState("");

  const handleSubmit = function () {};
  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <div className="searchbar__item">
        <SearchManifacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          className="absolute w-[20px] h-[20px] ml-4"
          width={25}
          height={25}
          alt="model-icon"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;

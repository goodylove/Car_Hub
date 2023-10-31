"use client";
import React, { ChangeEventHandler, FormEventHandler } from "react";
import { SearchManifacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`z-10 -ml-3 ${otherClasses}`}>
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
  const router = useRouter();

  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("ooosk");

    if (manufacturer === "" && model === "") return alert("please select");

    updateSearchParameters(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParameters = function (
    model: string,
    manufacturer: string
  ) {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

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

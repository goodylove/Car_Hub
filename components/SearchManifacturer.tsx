"use client";

import React, { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ManifacturerProps } from "@/Types";
import Image from "next/image";

function SearchManifacturer({
  manufacturer,
  setManufacturer,
}: ManifacturerProps) {
  const [query, setQuery] = useState("");
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="input-logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer_input"
            placeholder="volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManifacturer;

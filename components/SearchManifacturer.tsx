"use client";

import React from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ManifacturerProps } from "@/Types";

function SearchManifacturer({
  manufacturer,
  setManufacturer,
}: ManifacturerProps) {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full"></div>
      </Combobox>
    </div>
  );
}

export default SearchManifacturer;

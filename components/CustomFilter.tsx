"use client";

import React from "react";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFliterProps } from "./../Types/index";

function CustomFilter({ title, option }: CustomFliterProps) {
  const [selected, setSelected] = React.useState(option[0]);
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              alt="chevron"
              className="object-contain ml-4"
            />
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;

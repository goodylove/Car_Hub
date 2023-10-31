"use client";

import React from "react";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFliterProps } from "./../Types/index";
import { updateSearchParams } from "@/utils";

function CustomFilter({ title, option }: CustomFliterProps) {
  const [selected, setSelected] = React.useState(option[0]);
  const router = useRouter();

  const handleUpdateParams = function (e: { title: string; value: string }) {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };
  return (
    <div className="w-fit z-10">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e), handleUpdateParams(e);
        }}
      >
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
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {option.map((option) => (
                <Listbox.Option
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? " font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;

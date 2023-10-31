"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/Types";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathNmae = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathNmae);
  };
  return (
    <div className="w-full flex-center mt-10 gap-5">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

export default ShowMore;

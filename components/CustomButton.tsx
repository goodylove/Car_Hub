"use client";

import { CustomButtonProps } from "@/Types";
import React from "react";

function CustomButton({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      onClick={handleClick}
      className={`custom-btn  ${containerStyles}`}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;

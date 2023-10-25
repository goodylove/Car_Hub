"use client";

import { CustomButtonProps } from "@/Types";
import React from "react";

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button" || btnType}
      onClick={handleClick}
      className={`custom-btn  ${containerStyles}`}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;

"use client";

import { CustomButtonProps } from "@/Types";
import Image from "next/image";
import React from "react";

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyle,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button" || btnType}
      onClick={handleClick}
      className={`custom-btn  ${containerStyles}`}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right-icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;

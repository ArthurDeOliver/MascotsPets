"use client";

import { type MouseEventHandler } from "react";

interface AsideNavItemProps {
  icon: JSX.Element;
  text: string;
  hover: boolean;
  onClick: MouseEventHandler;
  isAcess: boolean;
}

export function AsideNavItem({
  icon,
  text,
  hover,
  onClick,
  isAcess,
}: AsideNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`${isAcess ? "p-4 rounded-full flex items-center gap-2 hover:bg-pets-color-500 transition-all bg-mascots-secundary-50" : "p-4 rounded-full flex items-center gap-2 hover:bg-pets-color-800 transition-all text-white active:bg-pets-color-500 active:text-black"} `}
    >
      {icon}
      <div
        className={`${
          !hover
            ? "hidden text-nowrap max-w-0"
            : "opacity-100 text-nowrap gap-0 max-w-full"
        } text-base font-medium transition-all duration-300 text-nowrap overflow-hidden `}
      >
        {text}
      </div>
    </button>
  );
}

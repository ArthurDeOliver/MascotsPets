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
      className={`${isAcess ? "p-4 rounded-full flex items-center gap-2 hover:bg-exames-color-800 hover:text-white transition-all bg-mascots-secundary-50" : "p-4 rounded-full flex items-center gap-2 hover:bg-exames-color-800 transition-all text-white active:bg-exames-color-500 active:text-black"} `}
    >
      {icon}
      <div
        className={`${!hover ? "hidden" : "text-base text-nowrap font-medium"}`}
      >
        {text}
      </div>
    </button>
  );
}
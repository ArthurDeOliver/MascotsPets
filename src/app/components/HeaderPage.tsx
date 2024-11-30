"use client";

import { FaPaw, FaRegUserCircle } from "react-icons/fa";

import { MdAssignment } from "react-icons/md";

import logo from "../assets/images/icon.png";

import Image from "next/image";
import Link from "next/link";

interface HeaderPageProps {
  home?: boolean;
  exames?: boolean;
  consutas?: boolean;
  internato?: boolean;
  recursos?: boolean;
  pets?: boolean;
}

export function HeaderPage({ exames, pets }: HeaderPageProps) {
  return (
    <header className=" font-roboto bg-white text-gray-800 h-20 p-6 flex justify-between items-center ">
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Ícone" width={50} height={50} />
      </div>

      <nav className="w-full">
        <ul className="flex gap-8 justify-center">
          <li className="group flex items-center">
            <Link
              href="/exames"
              className={`${
                exames
                  ? "bg-exames-color-600 text-white"
                  : "bg-transparent text-gray-800"
              } flex items-center space-x-2 py-2 px-4 rounded-full transition-all duration-200 group-hover:bg-exames-color-800 group-hover:shadow-lg group-hover:shadow-exames-color-800 group-hover:text-white`}
            >
              <MdAssignment size={24} />
              <span>Exames</span>
            </Link>
          </li>

          <li className="group flex items-center">
            <Link
              href="/pets"
              className={`${
                pets
                  ? "bg-pets-color-600 text-white"
                  : "bg-transparent text-gray-800"
              } flex items-center space-x-2 py-2 px-4 rounded-full transition-all duration-200 group-hover:bg-pets-color-800 group-hover:shadow-lg group-hover:shadow-pets-color-800 group-hover:text-white`}
            >
              <FaPaw size={24} />
              <span>Pets</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="ml-4 flex items-center space-x-6">
        <FaRegUserCircle
          size={32}
          className="text-gray-800 hover:text-black transition-colors duration-200"
        />
      </div>
    </header>
  );
}

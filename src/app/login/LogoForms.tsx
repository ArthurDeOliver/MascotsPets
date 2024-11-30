import Image from "next/image";
import logo from "../assets/images/Logo.png";

export function LogoForms() {
  return (
    <div className="w-2/3">
      <Image alt="logo" src={logo.src} />
    </div>
  );
}

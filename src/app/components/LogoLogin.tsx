import Image from "next/image";
import logo from "../assets/images/Logo.png";

export function LogoLogin() {
  return (
    <div>
      <Image alt="logo" src={logo.src} />
    </div>
  );
}

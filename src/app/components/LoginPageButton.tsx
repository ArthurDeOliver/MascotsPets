import Link from "next/link";

interface loginPageButtonProps {
  text: string;
}

export function LoginPageButton({ text }: loginPageButtonProps) {
  return (
    <Link
      href={"/exames"}
      className="py-2 font-roboto text-center bg-mascots-primary-600 rounded-xl w-full text-white  hover:bg-mascots-primary-800 active:bg-mascots-primary-500 transition-all"
    >
      {text}
    </Link>
  );
}

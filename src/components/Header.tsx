/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Drawer from "./Drawer";
import Image from "next/image";

export default function Header() {

  const { pathname, push } = useRouter();
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }


  return (
    <>
      <div className="w-full border h-[10vh] lg:h-[16vh] px-3 md:px-8 lg:px-[96px]  bg-opacity-80 bg-white flex items-center justify-between py-2  sm:mx-0 ">
        <div className=" py-3 flex items-center justify-between ">
          <Link
            href="/"
            className="align-middle flex items-center justify-center gap-3 text-2xl font-bold text-[#03071e]"
          >
            <img className="h-10 md:!h-16 w-auto" alt="E-settlement" src="/E-Settlement.png" />
          </Link>
        </div>

        <div className="lg:flex hidden items-center gap-6">
          <div>
            <Link href={"#"} className="text-xl lg:mx-9 mx-6 font-sora font-medium" >Company</Link>
            <Link href={"#"} className="text-xl lg:mx-9 mx-6 font-sora font-medium" >Products</Link>
            <Link href={"#"} className="text-xl lg:mx-9 mx-6 font-sora font-medium" >Careeers</Link>
            <Link href={"#"} className="text-xl lg:mx-9 mx-6 font-sora font-medium" >Contact</Link>
          </div>




        </div>
        <div className="lg:flex hidden items-center">
          <Link className="mx-2" href={""}>
            <Image alt="" className="h-6 w-6" width={24} height={24} src={"/images/49.png"} />
          </Link>
          <Link className="mx-2" href={""}>
            <Image className="h-6 w-6" alt="" width={24} height={24} src={"/images/50.png"} />
          </Link> <Link className="mx-2" href={""}>
            <Image className="h-6 w-6" alt="" width={24} height={24} src={"/images/51.png"} />
          </Link>
        </div>
        <button onClick={toggleDrawer} className="md:pr-12 pr-3 pl-4 inline-block lg:hidden">
          <svg
            className="mr-auto  text-[#03071e]"
            width="33"
            height="50"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.892578 10.8691H22.1058"
              stroke="#03071e"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M0.892578 18.8691H22.1058"
              stroke="#03071e"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M22.1066 14.8688H0.893399"
              stroke="#03071e"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Drawer isOpen={isOpen} setIsOpen={toggleDrawer} />
      </div>
    </>
  );
}

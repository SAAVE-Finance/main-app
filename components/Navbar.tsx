import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Logo from "@/public/assets/Saave.png";
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between my-5">
      <div className="m-5 px-8 flex items-center">
        <Image src={Logo} alt="img" height={400} width={400} className="h-10 w-10" />

        <h2 className="text-2xl text-white font-bold pb-1 ">SAAVE</h2>
      </div>
      <div className="m-5 px-8">
        <Link href="/earnings">Earnings</Link>
      </div>
      <div className="m-5 px-8">
        <ConnectButton
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          chainStatus="icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import Deposit from "./Buttons/deposit";
import Withdraw from "./Buttons/withdraw";
import { BigNumberish, ethers } from "ethers";
import SaaveABI2 from "@/abis/SaaveContract2ABI.json";
import { useContractReads } from "wagmi";
import { AuthContext } from "@/context/auth";
import Image from "next/image";
import Circle from "@/public/assets/Ellipse.png";
const Panel = () => {
  return (
    <section className="md:w-[60vw] md:h-[50vh] h-full w-full bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100  mx-auto shadow flex flex-col p-5 my-10">
      {/* <div className="absolute  text-4xl text-white">
        <div>
          <Image src={Circle} height={400} width={400} alt="img" className="h-48 w-48"/>
        </div>
      </div> */}
      <div>
        <h2 className="text-2xl text-white font-bold pb-1 ">SAAVE</h2>

      </div>
      <h2 className="text-xl mx-auto">What are you looking to do today ?</h2>
      <div className="flex justify-around my-10">
        <Deposit />
        <Withdraw />
      </div>
    </section>
  );
};

export default Panel;

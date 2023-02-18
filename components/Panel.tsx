import React, { useContext, useState } from "react";
import Deposit from "./Buttons/deposit";
import Withdraw from "./Buttons/withdraw";
import { BigNumberish, ethers } from "ethers";
import SaaveABI2 from "@/abis/SaaveContract2ABI.json";
import { useContractReads } from "wagmi";
import { AuthContext } from "@/context/auth";
const Panel = () => {
  return (
    <section className="bg-[#fffffff5] w-[40vw]  mx-auto rounded-md shadow flex flex-col p-5 my-10">
      <h2 className="text-xl mx-auto">What are you looking to do today ?</h2>
      <div className="flex justify-around my-10">
        <Deposit />
        <Withdraw />
      </div>
    </section>
  );
};

export default Panel;

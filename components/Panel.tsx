import React, { useContext, useState } from "react";
import Deposit from "./Buttons/deposit";
import Withdraw from "./Buttons/withdraw";
import { BigNumberish, ethers } from "ethers";
import SaaveABI2 from "@/abis/SaaveContract2ABI.json";
import { useContractReads } from "wagmi";
import { AuthContext } from "@/context/auth";
const Panel = () => {
  const {
    totalLP,
    userLP,
    daiPoolBal,
    usdcPoolBal,
    usdtPoolBal,
    setTotalLP,
    setUserLP,
    setDaiPoolBal,
    setUsdcPoolBal,
    setUsdtPoolBal,
  } = useContext(AuthContext);

  const saaveContract = {
    address: "0xe4463c64301f6021dba1f3ab7adbd85424a5da67",
    abi: SaaveABI2,
  };
  const { data } = useContractReads({
    contracts: [
      {
        ...saaveContract,
        functionName: "getPoolDAIBalance",
      },
      {
        ...saaveContract,
        functionName: "getPoolUSDCBalance",
      },
      {
        ...saaveContract,
        functionName: "getPoolUSDTBalance",
      },
      {
        ...saaveContract,
        functionName: "totalLP",
      },
      {
        ...saaveContract,
        functionName: "getUserLP",
      },
    ],
    async onSuccess(
      data: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ) {
      var daiPool = ethers.utils.formatEther(data[0]);
      setDaiPoolBal(daiPool);
      var usdcPool = ethers.utils.formatEther(data[1]);
      setUsdcPoolBal(usdcPool);
      var usdtPool = ethers.utils.formatEther(data[2]);
      setUsdtPoolBal(usdtPool);
      var totalLP = ethers.utils.formatEther(data[3]);
      setTotalLP(totalLP);
      var userLP = ethers.utils.formatEther(data[4]);
      setUserLP(userLP);
    },
  });
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

import { useAccount, useContract, useContractReads } from "wagmi";
import SAAVEABI from "@/abis/SAAVEABI.json";
import { BigNumberish, ethers } from "ethers";
import { useState } from "react";
const Earnings = () => {
  const saaveContract = {
    address: SAAVEABI.address,
    abi: SAAVEABI.abi,
  };
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...saaveContract,
        functionName: "getDeposited",
      },
      {
        ...saaveContract,
        functionName: "getEarned",
      },
    ],
    async onSuccess(data: [BigNumberish, BigNumberish]) {
      console.log(data);

      var totalEarned = ethers.utils.formatEther(data[1]);
      setEarned(totalEarned);
      var totalDeposited = ethers.utils.formatEther(data[0]);
      setDeposit(totalDeposited);
    },
  });
  const { isConnected } = useAccount();
  console.log(data);
  const [earned, setEarned] = useState("0");
  const [deposit, setDeposit] = useState("0");
  // ethers.utils.formatEther(data[0]);

  if (isConnected) {
    return (
      <section className="w-full h-full text-white flex flex-col align-middle justify-center text-center my-10">
        {/* <h1 className="text-3xl font-bold my-5">Your Earnings</h1> */}
        <div className="flex justify-around">
          <section>
            <h2 className="text-2xl font-medium my-3">Earned</h2>
            <h2 className="text-xl font-medium my-3">$ {earned}</h2>
          </section>
          <div>
            <h2 className="text-2xl font-medium my-3">Deposits</h2>
            <h2 className="text-xl font-medium my-3">$ {deposit}</h2>
          </div>
        </div>
        <h2 className="my-5 text-2xl font-medium">
          Wooho! You have earned a 4% interset on your deposit.
        </h2>
      </section>
    );
  } else {
    return (
      <div className="text-white text-center text-xl">
        Connect to wallet to earn{" "}
      </div>
    );
  }
};

export default Earnings;

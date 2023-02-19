import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import SAAVEABI from "@/abis/SAAVEABI.json";
import Circle from "@/public/assets/Polygon.png";
import Logo from "@/public/assets/Saave.png";
import Network from "@/public/assets/network.png";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/auth";
import { useContract, useSigner } from "wagmi";

function Saave() {
  const [depositClicked, setDepositClicked] = useState(false);
  const [withdrawClicked, setWithdrawClicked] = useState(false);
  const {
    totalLP,
    userLP,
    daiPoolBal,
    usdcPoolBal,
    usdtPoolBal,
    crvValue,
    crvValueUSD,
  } = useContext(AuthContext);
  const [estimatedDai, setEstimatedDai] = useState("0");
  const [estimatedUsdc, setEstimatedUsdc] = useState("0");
  const [estimatedUsdt, setEstimatedUsdt] = useState("0");
  const [estimatedTotal, setEstimatedTotal] = useState("0");
  const saaveContract = {
    address: SAAVEABI.address,
    abi: SAAVEABI.abi,
  };
  const { data: signer, isError, isLoading } = useSigner();
  const saaveContract2 = useContract({
    ...saaveContract,
    signerOrProvider: signer,
  });
  const handleWithdraw = () => {
    saaveContract2!.withdraw();
  };
  useEffect(() => {
    if (totalLP === "0") return;
    const dai =
      parseFloat(daiPoolBal) * (parseFloat(userLP) / parseFloat(totalLP));
    const usdc =
      parseFloat(usdcPoolBal) * (parseFloat(userLP) / parseFloat(totalLP));
    const usdt =
      parseFloat(usdtPoolBal) * (parseFloat(userLP) / parseFloat(totalLP));
    const total = dai + usdc + usdt;
    setEstimatedDai(dai.toString());
    setEstimatedUsdc(usdc.toString());
    setEstimatedUsdt(usdt.toString());
    setEstimatedTotal(total.toString());
  }, [totalLP, userLP, daiPoolBal, usdcPoolBal, usdtPoolBal]);

  const handleClick = () => {
    setDepositClicked(true);
  };
  const router = useRouter();
  return (
    <div className="font-Inter h-[60vh] w-full p-10 flex items-center justify-center relative">
      {/* <h1 className='text-white text-2xl'>Hello</h1> */}
      <div className="absolute h-full w-full md:w-[80vw] -z-30 -top-[45px] left-[120px] flex flex-col">
        <div className="flex justify-end">
          <Image
            src={Circle}
            alt="img"
            height={400}
            width={400}
            className="h-64 w-64 flex-end"
          />
        </div>
        <div className="flex justify-start">
          <Image
            src={Circle}
            alt="img"
            height={400}
            width={400}
            className="h-96 w-96 flex-end"
          />
        </div>
      </div>

      <div className="relative h-full w-full md:w-[60vw] p-10 bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100">
        <div className="text-white font-bold text-base flex items-center">
          <Image
            src={Logo}
            alt="img"
            height={400}
            width={400}
            className="h-10 w-10"
          />
          SAAVE
        </div>

        <div className="flex flex-col sm:flex-row  justify-around p-4 mt-4">
          <div>
            <p>DAI: $ {estimatedDai}</p>
            <p>USDC: $ {estimatedUsdc}</p>
            <p>USDT: $ {estimatedUsdt}</p>
            <p>CRV: {crvValue}</p>
            <p>CRV (USD): {crvValueUSD}</p>
            <p>Estimated Total: {estimatedTotal}</p>
          </div>
          <button
            onClick={handleWithdraw}
            className="bg-[#ff3a3a] rounded px-4 mt-2 py-2"
          >
            Withdraw
          </button>
        </div>

        <div className="relative -bottom-4 sm:-bottom-24 md:-bottom-28 flex justify-end">
          <Image
            src={Network}
            alt="img"
            height={400}
            width={400}
            className="h-10 w-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Saave;

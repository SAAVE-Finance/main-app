import React, { useEffect, useContext } from "react";
import USDTABI from "../../abis/usdt.json";
import SaaveABI2 from "../../abis/SaaveContract2ABI.json";
import USDCABI from "../../abis/usdc.json";
import {
  useAccount,
  useContract,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useSigner,
} from "wagmi";
import { BigNumberish, ethers } from "ethers";
import { AuthContext } from "@/context/auth";
const DepositModal = () => {
  const {
    usdtAllowance,
    depositDAIValue,
    daiAllowance,
    usdcAllowance,
    depositUSDTValue,
    depositUSDCValue,
    setDaiAllowance,
    setUsdcAllowance,
    setDepositUSDTValue,
    setUsdtAllowance,
    setDepositUSDCValue,
    setDepositDAIValue,
  } = useContext(AuthContext);

  const { data: signer, isError, isLoading } = useSigner();
  const usdcContract = useContract({
    address: "0xfC872E8Dc23fD2fDe20F720077016b9C4B1c8C59",
    abi: USDCABI,
    signerOrProvider: signer,
  });
  const saaveContract2 = useContract({
    address: "0xe4463c64301f6021dba1f3ab7adbd85424a5da67",
    abi: SaaveABI2,
    signerOrProvider: signer,
  });
  const saaveContract = {
    address: "0xe4463c64301f6021dba1f3ab7adbd85424a5da67",
    abi: SaaveABI2,
  };
  const { data } = useContractReads({
    contracts: [
      {
        ...saaveContract,
        functionName: "getDaiAllowance",
      },
      {
        ...saaveContract,
        functionName: "getUSDCAllowance",
      },
      {
        ...saaveContract,
        functionName: "getUSDTAllowance",
      },
    ],
    async onSuccess(data: [BigNumberish, BigNumberish, BigNumberish]) {
      var dai = ethers.utils.formatEther(data[0]);
      setDaiAllowance(dai);
      var usdc = ethers.utils.formatEther(data[1]);
      setUsdcAllowance(usdc);
      var usdt = ethers.utils.formatEther(data[2]);
      setUsdtAllowance(usdt);
    },
  });
  const USDCContract = {
    address: "0xfC872E8Dc23fD2fDe20F720077016b9C4B1c8C59",
    abi: USDCABI,
  };
  const USDTContract = {
    address: "0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832",
    abi: USDTABI,
  };
  // const DAIContract = {
  //   address: "0xd393b1E02dA9831Ff419e22eA105aAe4c47E1253",
  //   abi: SaaveABI,
  // };
  const handleClick = () => {
    usdcContract!.approve(
      "0xe4463c64301f6021dba1f3ab7adbd85424a5da67",
      "1000000000000000000"
    );
  };
  const handleSubmit = () => {
    saaveContract2!.deposit();
  };
  return (
    <div className="flex flex-col align-middle justify-center text-white">
      <input
        placeholder="Amount of USDC"
        type="number"
        className="p-4 rounded border-none bg-[#282640] my-2 "
        value={depositUSDCValue}
        onChange={(e) => setDepositUSDCValue(e.target.value)}
      />
      {!(depositUSDCValue === "0") && depositUSDCValue && (
        <button className="p-3 bg-[#77f177]" onClick={handleClick}>
          Approve
        </button>
      )}
      <input
        placeholder="Amount of USDT"
        type="number"
        className="p-4 rounded border-none bg-[#282640] my-2"
        value={depositUSDTValue}
        onChange={(e) => setDepositUSDTValue(e.target.value)}
      />
      {!(depositUSDTValue === "0") && depositUSDTValue && (
        <button className="p-3 bg-[#77f177]" onClick={handleClick}>
          Approve
        </button>
      )}
      <input
        placeholder="Amount of DAI"
        type="number"
        className="p-4 rounded border-none bg-[#282640] my-2"
        value={depositDAIValue}
        onChange={(e) => setDepositDAIValue(e.target.value)}
      />
      {!(depositDAIValue === "0") && depositDAIValue && (
        <button className="p-3 bg-[#77f177]">Approve</button>
      )}
      <button className="p-4 bg-[#ff4747] my-3 rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default DepositModal;

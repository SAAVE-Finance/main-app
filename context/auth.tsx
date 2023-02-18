import React, { ReactNode, createContext, useState } from "react";
import { BigNumberish, ethers } from "ethers";
import SaaveABI2 from "@/abis/SaaveContract2ABI.json";
import { useContract, useContractReads, useSigner } from "wagmi";
export const AuthContext = createContext({
  walletUSDCBalance: "0",
  walletUSDTBalance: "0",
  walletDAIBalance: "0",
  depositDAIValue: "0",
  depositUSDCValue: "0",
  depositUSDTValue: "0",
  daiAllowance: "0",
  usdcAllowance: "0",
  usdtAllowance: "0",
  daiPoolBal: "0",
  usdcPoolBal: "0",
  usdtPoolBal: "0",
  userLP: "0",
  totalLP: "0",
  crvValueUSD: "0",
  crvValue: "0",
  setCrvValue: (crvValue: string) => {},
  setCrvValueUSD: (crvValueUSD: string) => {},
  setTotalLP: (totalLP: string) => {},
  setUserLP: (userLP: string) => {},
  setUsdtPoolBal: (usdtPoolBal: string) => {},
  setUsdcPoolBal: (usdcPoolBal: string) => {},
  setDaiPoolBal: (daiPoolBal: string) => {},
  setUsdtAllowance: (usdtAllowance: string) => {},
  setUsdcAllowance: (usdcAllowance: string) => {},
  setDaiAllowance: (daiAllowance: string) => {},
  setDepositUSDTValue: (depositUSDTValue: string) => {},
  setDepositUSDCValue: (depositUSDCValue: string) => {},
  setDepositDAIValue: (depositDAIValue: string) => {},
  setWalletDAIBalance: (walletDAIBalance: string) => {},
  setWalletUSDTBalance: (walletUSDTBalance: string) => {},
  setWalletUSDCBalance: (walletUSDCBalance: string) => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [walletUSDCBalance, setWalletUSDCBalance] = useState("0");
  const [walletUSDTBalance, setWalletUSDTBalance] = useState("0");
  const [walletDAIBalance, setWalletDAIBalance] = useState("0");
  const [depositDAIValue, setDepositDAIValue] = useState("0");
  const [depositUSDCValue, setDepositUSDCValue] = useState("0");
  const [depositUSDTValue, setDepositUSDTValue] = useState("0");
  const [crvValue, setCrvValue] = useState("0");
  const [crvValueUSD, setCrvValueUSD] = useState("0");
  const [daiAllowance, setDaiAllowance] = useState("0");
  const [usdcAllowance, setUsdcAllowance] = useState("0");
  const [usdtAllowance, setUsdtAllowance] = useState("0");
  const [daiPoolBal, setDaiPoolBal] = useState("0");
  const [usdcPoolBal, setUsdcPoolBal] = useState("0");
  const [usdtPoolBal, setUsdtPoolBal] = useState("0");
  const [userLP, setUserLP] = useState("0");
  const [totalLP, setTotalLP] = useState("0");

  const saaveContract = {
    address: "0xe4463c64301f6021dba1f3ab7adbd85424a5da67",
    abi: SaaveABI2,
  };
  const { data: signer, isError, isLoading } = useSigner();
  const saaveContract2 = useContract({
    ...saaveContract,
    signerOrProvider: signer,
  });
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
      {
        ...saaveContract,
        functionName: "totalCRVEarned",
      },
      {
        ...saaveContract,
        functionName: "getCRVSold",
      },
    ],
    async onSuccess(
      data: [
        BigNumberish,
        BigNumberish,
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
      var crv = ethers.utils.formatEther(data[5]);
      setCrvValue(crv);
      var crvUSD = ethers.utils.formatEther(data[6]);
      setCrvValueUSD(crvUSD);
    },
  });

  return (
    <AuthContext.Provider
      value={{
        daiPoolBal,
        usdcPoolBal,
        usdtPoolBal,
        userLP,
        totalLP,
        daiAllowance,
        usdcAllowance,
        usdtAllowance,
        depositDAIValue,
        depositUSDCValue,
        depositUSDTValue,
        walletUSDCBalance,
        walletDAIBalance,
        walletUSDTBalance,
        crvValueUSD,
        crvValue,
        setCrvValueUSD,
        setCrvValue,
        setTotalLP,
        setUserLP,
        setUsdtPoolBal,
        setUsdcPoolBal,
        setDaiPoolBal,
        setUsdtAllowance,
        setUsdcAllowance,
        setDaiAllowance,
        setWalletUSDCBalance,
        setDepositDAIValue,
        setDepositUSDCValue,
        setDepositUSDTValue,
        setWalletDAIBalance,
        setWalletUSDTBalance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

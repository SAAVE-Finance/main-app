import React, { ReactNode, createContext, useState } from "react";
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
  const [daiAllowance, setDaiAllowance] = useState("0");
  const [usdcAllowance, setUsdcAllowance] = useState("0");
  const [usdtAllowance, setUsdtAllowance] = useState("0");
  const [daiPoolBal, setDaiPoolBal] = useState("0");
  const [usdcPoolBal, setUsdcPoolBal] = useState("0");
  const [usdtPoolBal, setUsdtPoolBal] = useState("0");
  const [userLP, setUserLP] = useState("0");
  const [totalLP, setTotalLP] = useState("0");

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

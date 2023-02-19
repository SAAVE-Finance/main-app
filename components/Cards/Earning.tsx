import { useAccount } from "wagmi";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/auth";

const Earnings = () => {
  const { isConnected } = useAccount();
  const {
    userDeposit,
    userEarned,
    totalLP,
    userLP,
    daiPoolBal,
    usdcPoolBal,
    usdtPoolBal,
    crvValue,
    crvValueUSD,
    estimatedDai,
    estimatedUsdc,
    estimatedUsdt,
    estimatedTotal,
    setEstimatedDai,
    setEstimatedUsdc,
    setEstimatedUsdt,
    setEstimatedTotal,
    setUserDeposit,
    setUserEarned,
  } = useContext(AuthContext);

  useEffect(() => {
    if (totalLP === "0") return;
    const dai =
      parseFloat(daiPoolBal) * (parseFloat(userLP) / parseFloat(totalLP));
    // console.log("DAI IS", dai);
    const usdc =
      parseFloat(usdcPoolBal) * (parseFloat(userLP) / parseFloat(totalLP));
    // console.log("USDC IS", usdc);
    const usdt =
      parseFloat(usdtPoolBal) * (parseFloat(userLP) / parseFloat(totalLP));
    // console.log("USDT IS", usdt);
    const total = dai + usdc + usdt;
    const earned = total - parseFloat(userDeposit);
    setUserEarned(earned.toString());
    setEstimatedDai(dai.toString());
    setEstimatedUsdc(usdc.toString());
    setEstimatedUsdt(usdt.toString());
    setEstimatedTotal(total.toString());
  }, [
    totalLP,
    userLP,
    daiPoolBal,
    usdcPoolBal,
    usdtPoolBal,
    userDeposit,
    setUserEarned,
    setEstimatedDai,
    setEstimatedUsdc,
    setEstimatedUsdt,
    setEstimatedTotal,
  ]);

  if (isConnected) {
    return (
      <section className="w-full h-full text-white flex flex-col align-middle justify-center text-center my-10">
        {/* <h1 className="text-3xl font-bold my-5">Your Earnings</h1> */}
        <div className="flex justify-around">
          <section>
            <h2 className="text-2xl font-medium my-3">Earned</h2>
            <h2 className="text-xl font-medium my-3">$ {userEarned}</h2>
          </section>
          <div>
            <h2 className="text-2xl font-medium my-3">Deposits</h2>
            <h2 className="text-xl font-medium my-3">$ {userDeposit}</h2>
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

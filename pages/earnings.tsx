import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useState } from "react";
const Earnings = () => {
  const { address, isConnected } = useAccount();
  if (isConnected) {
    return (
      <section className="w-full h-full text-white flex flex-col align-middle justify-center text-center my-10">
        <h1 className="text-3xl font-bold my-5">Your Earnings</h1>
        <div className="flex justify-around">
          <section>
            <h2 className="text-2xl font-bold my-3">Earned</h2>
            <h2 className="text-xl font-bold my-3">$ 432</h2>
          </section>
          <section>
            <h2 className="text-2xl font-bold my-3">Deposits</h2>
            <h2 className="text-xl font-bold my-3">$ 1432</h2>
          </section>
        </div>
        <h2 className="my-5 text-xl">
          Wooho! You have earned a 4% interset on your deposit.
        </h2>
      </section>
    );
  } else {
    return <div className="text-white">Connect a wallet to earn </div>;
  }
};

export default Earnings;

import React, { useContext, useState } from "react";
import Image from "next/image";
import Circle from "@/public/assets/Ellipse.png";
import Logo from "@/public/assets/Saave.png";
import Network from "@/public/assets/network.png";
import { AuthContext } from "@/context/auth";
import { useRouter } from "next/router";

const Saave = () => {
  const [depositClicked, setDepositClicked] = useState(false);
  const [withdrawClicked, setWithdrawClicked] = useState(false);
  const {
    usdtAllowance,
    daiAllowance,
    usdcAllowance,
    depositDAIValue,
    depositUSDTValue,
    depositUSDCValue,
    setDaiAllowance,
    setUsdcAllowance,
    setDepositUSDTValue,
    setUsdtAllowance,
    setDepositUSDCValue,
    setDepositDAIValue,
  } = useContext(AuthContext);
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

      <div className="relative mt-10 h-auto w-full md:w-[60vw] p-10 bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100">
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

        <div className="mt-5 flex-col lg:flex-row flex items-center justify-center lg:divide-x-2 ">
          <div className="w-full">
            <h2 className="text-xl md:text-3xl font-bold text-gray-300 hover:text-white mt-4">
              DEPOSIT
            </h2>
            <div className=" p-4 mt-2 ">
              <form className="w-full md:w-1/2">
                <div className="flex-col  flex items-center py-2">
                  <div className="flex flex-col md:flex-col m-2">
                    <div className="border-b-2 border-white w-full md:w-24">
                      <input
                        className=" appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-gray-100 placeholder:text-base "
                        type="number"
                        placeholder="USDT"
                        aria-label="Enter Amount"
                      />
                    </div>
                    <button
                      className="mt-1 sm:mt-2 flex-shrink-0 text-base sm:text-xl font-bold text-white py-1 px-2 rounded"
                      type="button"
                    >
                      APPROVE
                    </button>
                  </div>
                  <div className="flex-row flex md:flex-col m-2">
                    <div className="border-b-2 border-white w-full md:w-24">
                      <input
                        className=" appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-gray-100 placeholder:text-base "
                        type="number"
                        placeholder="USDT"
                        aria-label="Enter Amount"
                      />
                    </div>
                    <button
                      className="mt-1 sm:mt-2 flex-shrink-0 text-base sm:text-xl font-bold text-white py-1 px-2 rounded"
                      type="button"
                    >
                      APPROVE
                    </button>
                  </div>
                  <div className="flex-row flex md:flex-col m-2">
                    <div className="border-b-2 border-white w-full md:w-24">
                      <input
                        className=" appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-gray-100 placeholder:text-base "
                        type="number"
                        placeholder="USDT"
                        aria-label="Enter Amount"
                      />
                    </div>
                    <button
                      className="mt-1 sm:mt-2 flex-shrink-0 text-base sm:text-xl font-bold text-white py-1 px-2 rounded"
                      type="button"
                    >
                      APPROVE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className=" w-full ml-4 px-4">
            <h2 className="text-xl md:text-3xl font-bold text-gray-300 hover:text-white mt-4">
              Wallet Balance
            </h2>
            <div className="mt-4 p-4">
              <p className="text-lg text-white "> DAI : $ {usdcAllowance}</p>
              <p className="text-lg text-white "> USDC : $ {usdtAllowance}</p>
              <p className="text-lg text-white "> USDT : $ {daiAllowance}</p>
            </div>
          </div>
        </div>

        <div className="relative -bottom-4 sm:-bottom-6 flex justify-end">
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
};

export default Saave;

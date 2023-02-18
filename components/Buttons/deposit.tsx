import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import SaaveABI from "../../abis/abi.json";
import Typography from "@mui/material/Typography";
import { useContractReads } from "wagmi";
import DepositModal from "@/components/Modal/DepositModal";
import { BigNumberish, ethers } from "ethers";

const Deposit = () => {
  const [walletUSDCBalance, setWalletUSDCBalance] = useState("0");
  const [walletUSDTBalance, setWalletUSDTBalance] = useState("0");
  const [walletDAIBalance, setWalletDAIBalance] = useState("0");

  const saaveContract = {
    address: "0xBFbA56f89f343dc43B99Dcb0c6e30045d2D2E948",
    abi: SaaveABI,
  };
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...saaveContract,
        functionName: "getWalletUSDCBalance",
      },
      {
        ...saaveContract,
        functionName: "getWalletUSDTBalance",
      },
      {
        ...saaveContract,
        functionName: "getWalletDAIBalance",
      },
    ],
    async onSuccess(data: [BigNumberish, BigNumberish, BigNumberish]) {
      var totalDeposited = ethers.utils.formatEther(data[0]);
      setWalletUSDCBalance(totalDeposited);
      var totalEarned = ethers.utils.formatEther(data[1]);
      setWalletUSDTBalance(totalEarned);
      var totalEarned = ethers.utils.formatEther(data[2]);
      setWalletDAIBalance(totalEarned);
    },
  });
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <button
        className="bg-[#42ff31] p-3 border shadow text-xl rounded-md px-3 hover:scale-105"
        onClick={handleClick}
      >
        Deposit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="bg-[#bffafff9] w-[40vw]">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-center text-xl"
          >
            Deposit
          </Typography>
          <div className="flex">
            <DepositModal />
            {/* <div className="flex flex-col align-middle justify-center text-white">
              <input
                placeholder="Amount of USDC"
                type="number"
                className="p-4 rounded border-none bg-[#282640] my-2 "
                value={depositUSDCValue}
                onChange={(e) => setDepositUSDCValue(e.target.value)}
              />
              {!(depositUSDCValue === "0") && (
                <button className="p-3 bg-[#77f177]">Approve</button>
              )}
              <input
                placeholder="Amount of USDT"
                type="number"
                className="p-4 rounded border-none bg-[#282640] my-2"
                value={depositUSDTValue}
                onChange={(e) => setDepositUSDTValue(e.target.value)}
              />
              {!(depositUSDTValue === "0") && (
                <button className="p-3 bg-[#77f177]">Approve</button>
              )}
              <input
                placeholder="Amount of DAI"
                type="number"
                className="p-4 rounded border-none bg-[#282640] my-2"
                value={depositDAIValue}
                onChange={(e) => setDepositDAIValue(e.target.value)}
              />
              {!(depositDAIValue === "0") && (
                <button className="p-3 bg-[#77f177]">Approve</button>
              )}
              <button className="p-4 bg-[#ff4747] my-3 rounded">Submit</button>
            </div> */}
            <div className="flex flex-col border-l-2 border-black mx-2">
              <h2 className="m-3">Wallet Balance</h2>
              <h2 className="text-xl font-bold m-3 ">
                USDC - {walletUSDCBalance}
              </h2>
              <h2 className="text-xl font-bold m-3 ">
                USDT - {walletUSDTBalance}
              </h2>
              <h2 className="text-xl font-bold m-3 ">
                DAI - {walletDAIBalance}
              </h2>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Deposit;

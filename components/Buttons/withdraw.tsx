import React, { useContext, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import SaaveABI2 from "@/abis/SaaveContract2ABI.json";
import { AuthContext } from "@/context/auth";
import { useContract, useSigner } from "wagmi";
const Withdraw = () => {
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
    address: "0xe4463c64301f6021dba1f3ab7adbd85424a5da67",
    abi: SaaveABI2,
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
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ffff89",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <button
        className="bg-[#ff4141] p-3 border shadow text-xl rounded-md px-3 hover:scale-105"
        onClick={handleClick}
      >
        Withdraw
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <p>DAI: $ {estimatedDai}</p>
            <p>USDC: $ {estimatedUsdc}</p>
            <p>USDT: $ {estimatedUsdt}</p>
            <p>CRV: {crvValue}</p>
            <p>CRV (USD): {crvValueUSD}</p>
            <p>Estimated Total: {estimatedTotal}</p>
          </div>
          <button onClick={handleWithdraw} className="bg-[#ff3a3a] p-3">
            Withdraw
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default Withdraw;

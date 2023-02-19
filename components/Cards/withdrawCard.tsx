import React, { useState } from 'react'
import Image from 'next/image'
import Circle from "@/public/assets/Ellipse.png";
import Logo from "@/public/assets/Saave.png";
import Network from "@/public/assets/network.png";
import Deposit from "../Buttons/deposit";
import Withdraw from "../Buttons/withdraw";
import { useRouter } from 'next/router'

function Saave() {
    const [depositClicked, setDepositClicked] = useState(false)
    const [withdrawClicked, setWithdrawClicked] = useState(false)

    const handleClick = () => {
        setDepositClicked(true);
    }
    const router = useRouter();
    return (
        <div className='font-Inter h-[60vh] w-full p-10 flex items-center justify-center relative'>
            {/* <h1 className='text-white text-2xl'>Hello</h1> */}
            <div className='absolute h-full w-full md:w-[80vw] -z-30 -top-[45px] left-[120px] flex flex-col'>
                <div className='flex justify-end'>
                    <Image src={Circle} alt="img" height={400} width={400} className="h-64 w-64 flex-end" />
                </div>
                <div className='flex justify-start'>
                    <Image src={Circle} alt="img" height={400} width={400} className="h-96 w-96 flex-end" />
                </div>
            </div>

            <div className='relative h-full w-full md:w-[60vw] p-10 bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100'>
                <div className='text-white font-bold text-base flex items-center'>
                    <Image src={Logo} alt="img" height={400} width={400} className="h-10 w-10" />
                    SAAVE
                </div>

                <h2 className="text-xl text-center text-white mx-auto">What are you looking to do today ?</h2>
                <div className='flex-col sm:flex-row flex justify-around p-4 mt-4'>
                    {/* <Deposit />
                    <Withdraw /> */}

                    <button className="bg-transparent text-xl md:text-3xl font-bold text-gray-300 hover:text-white" onClick={() => router.push('/deposit')}>DEPOSIT</button>
                    <button className="bg-transparent text-xl md:text-3xl font-bold text-gray-300 hover:text-white" onClick={() => router.push('/withdraw')}>WITHDRAW</button>
                </div>
                {/* <div className='w-full p-4'>
                    <p className='text-center text-gray-300 text-lg'>Rewards 4% APY in last 90 days</p>
                    <p>

                    </p>
                </div> */}
                <div className='relative -bottom-4 sm:-bottom-24 md:-bottom-28 flex justify-end'>
                    <Image src={Network} alt="img" height={400} width={400} className="h-10 w-10" />
                </div>
            </div>
        </div>
    )
}

export default Saave
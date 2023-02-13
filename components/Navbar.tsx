import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Navbar = () => {
  return (
    <nav className='w-full flex justify-between my-5'>
        <div className="m-5 px-8">
            <h2 className='text-white '>sAAVE</h2>
        </div>
        <div className="m-5 px-8">
        <ConnectButton/>
        </div>
    </nav>
  )
}

export default Navbar
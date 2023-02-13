import React from 'react'

const Panel = () => {
  return (
    <section className='bg-[#ffffffc4] w-[40vw]  mx-auto rounded-md shadow flex flex-col p-5 '>
        <h2 className='text-xl mx-auto'>Inputs</h2>
        <input type="text" placeholder="0.00" className='p-3 rounded my-2 bg-[#00000085] text-white border-none'/>
        <input type="text" placeholder="0.00" className='p-3 rounded my-2 bg-[#00000085] text-white border-none'/>
        <button className='bg-[#e93859] rounded p-3 text-white w-[30%] mx-auto my-2'>Swap</button>
    </section>
  )
}

export default Panel
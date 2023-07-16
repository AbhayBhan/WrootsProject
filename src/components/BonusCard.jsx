import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const BonusCard = ({setReferModal}) => {
  return (
    <div className='flex flex-row items-center px-2 py-4 border-2 justify-between'>
      <FaLightbulb size={30} color='yellow' />
      <div className='w-1/2'>
        <h1 className='font-medium text-xl'>Referral Bonus - 90,000</h1>
        <p>Share us Phone Number of your contacts and get direct cash to your preffered account</p>
      </div>
      <button onClick={() => setReferModal(true)} className='px-4 py-2 bg-blue-500 text-white rounded-lg'>Refer Now</button>
    </div>
  )
}

export default BonusCard
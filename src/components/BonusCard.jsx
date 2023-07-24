import React from 'react';
import { FaLightbulb } from 'react-icons/fa';

const BonusCard = ({setReferModal, referralAmount}) => {
  return (
    <div className='flex flex-row items-center px-2 py-4 border-2 justify-between'>
      <FaLightbulb size={30} color='yellow' />
      <div className='w-1/2'>
        <h1 className='font-medium text-xl'>Referral Bonus - {referralAmount.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR'
})}</h1>
        <p>Share us Phone Number of your contacts and get direct cash to your preffered account</p>
      </div>
      <button onClick={() => setReferModal(true)} className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300'>Refer Now</button>
    </div>
  )
}

export default BonusCard
import { PiggyBank } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-center items-center gap-2 m-5'>

          <PiggyBank/>
          <span className='font-bold text-2xl  '>
          Spendora
          </span>
      </div>
  )
}

export default Logo
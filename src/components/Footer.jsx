import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='min-h-[20vh] bg-[#061023] w-full flex items-center justify-center'>
      <Image 
        width={300}
        height={300}
        src='/images/footer.png'
        alt='Partners Image'
        className='md:w-[30%] w-[70%]'
      />
    </div>
  )
}

export default Footer
import React from 'react'
import Image from 'next/image'
import winner1 from '@/public/winner1.jpg'

const  page = () => {
  return (
    
    <h1>First Winner:</h1>,
    <>
    <div>
      <Image src={winner1} width='250'/>
    </div>
    </>
  )
}

export default page

import React from 'react'
import Image from 'next/image'
import winner2 from '@/public/winner2.jpg'

export default function services() {
  return (
    <>
      <h1>Second winner:</h1>
      <div>
        <Image src={winner2} width={300} height={300} alt='Imagen'/>
      </div>
      
    </>
  )
}

import React from 'react'

export default function Icones({src, alt}) {
  return (
    <div className='w-10'>
      <img src={src} alt={alt} />
    </div>
  )
}
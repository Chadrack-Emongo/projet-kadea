import React from 'react'

export default function Images({src, alt}) {
  return (
    <div className='flex justify-center -m-10 mb-6'>
      <img className='h-56' src={src} alt={alt} />
    </div>
  )
}


import React from 'react'

export default function InputLabel(props) {
    return (
        <div className='grid '>
            <label className='text-xl mt-6 text-white font-bold' for="form_element">{props.name}</label>
            <input className='w-11/12 h-12 text-black font-bold' type="text" />
        </div>
    )
}

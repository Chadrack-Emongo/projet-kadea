import React from 'react'

export default function Button(props) {
    return (
        <div className='flex justify-center'>
            <button className={props.classButton}>{props.name}</button>
        </div>
    )
}

import React from 'react'
import './Auth.css'

export default function Auth({type, unique}) {
    return (
        <div className='singleAuth'>
        <label>{type} {unique}</label>
            <input type ={type}/>
        </div>
    )
}

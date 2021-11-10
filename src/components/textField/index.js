import React from 'react'
import './field.css'
export const TextField = ({label, onChange, placeholder, value}) => {
    return (
        <label className='field-label'>
            {label}
            <input className='field-input' placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}   />
        </label>
    )
}

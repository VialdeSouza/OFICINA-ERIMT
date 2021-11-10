import React, { useState } from 'react'
import { TextField } from '../textField'
import './inputAction.css'


export const InputAction = ({label, placeholder, nameButton, onClick }) => {
  const [value, setValue] = useState();

  const handleClick = () => {
    onClick(value);
    setValue('');
  }

    return (
        <div className='input-action'>   
            <TextField label={label} placeholder={placeholder} onChange={(text) => setValue(text)} value={value} />
            <button className='input-action-button' onClick={handleClick }> {nameButton} </button>
        </div>
    )
}

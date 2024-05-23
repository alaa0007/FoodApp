import React from 'react'

const Input = ({ id, label, required, ...props }) => {
  return (
    <p className='control'>
        <label htmlFor={id}>{label}</label>
        <input name={id} id={id} {...props} required={required} />
    </p>
  )
}

export default Input;
import React from 'react'
import { Field,ErrorMessage,FastField } from 'formik'
export default function Input(props) {
  const {ringcolor,label,name,className,...rest} = props
  return (
    <div>
        <label htmlFor={name}>{label}</label>
      <Field id={name}  className={`focus:ring-4 focus:ring-opacity-50 focus:${ringcolor} focus:transition-all outline-none focus:fade-in-out ${className}`}  name={name} {...rest}/>
      <div id="error" className="text-red-500">
      <ErrorMessage  name={name}/>
      </div>
    </div>
  )
}

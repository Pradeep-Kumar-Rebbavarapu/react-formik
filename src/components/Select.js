import React from 'react'
import { Field,ErrorMessage,FastField } from 'formik'
export default function Select(props) {
    const {options,label,name,...rest} = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field    as="select" id={name}   name={name} {...rest}>
      {
          options.map(option=>{
              return (
                  <option key={option.value} value={option.value}>
                      {option.key}
                  </option>
              )
          })
      }
      </Field>
      <div id="error" className="text-red-500">
      <ErrorMessage  name={name}/>
      </div>
    </div>
  )
}

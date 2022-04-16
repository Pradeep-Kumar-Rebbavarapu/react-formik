import React from 'react'
import { Field,ErrorMessage,FastField } from 'formik'
export default function Radio(props) {
    const {options,label,name,...rest} = props
  return (
    <div>
      <div className="form-control">
      <label >{label}</label>
      <FastField name={name}   {...rest}>
      {({field})=>{
              console.log(field);
              return options.map(option=>{
                  return (
                      <React.Fragment key={option.key}>
                          <input type="radio" id={option.key}  {...field} value={option.value} checked={field.value===option.value}
                         />
                          <label htmlFor={option.value}>{option.value}</label>
                      </React.Fragment>
                  )
              })
          }
      }
      </FastField>
      <div id="error" className="text-red-500">
      <ErrorMessage  name={name}/>
      </div>
    </div>
    </div>
  )
}

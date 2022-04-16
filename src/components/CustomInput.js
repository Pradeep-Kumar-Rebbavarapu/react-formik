import React from 'react'
import { Field,ErrorMessage,FastField } from 'formik'
export default function CustomInput(props1) {
  return (
    <div>
      <label htmlFor={props1.name}>{props1.placeholder}</label>
      <FastField    name={props1.name} >
          {
              (props2)=>{
                console.log('Field Rendered');
                const {field,form,meta} = props2
                  return (
                    <input id={props2.id} {...field} placeholder={props1.placeholder} className= {props1.className} type={props1.type}/>
                  )
                    
                    
                  
              }
          }
      </FastField>
      <div id="error" className="text-red-500 text-[40px]">
      <h1><ErrorMessage  name={props1.name}/></h1>
      </div>
    </div>
  )
}

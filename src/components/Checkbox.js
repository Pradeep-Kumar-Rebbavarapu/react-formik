import React from 'react'
import { ErrorMessage,FastField } from 'formik'
export default function Checkbox(props) {
    const {options,label,name,...rest} = props
    return (
        <div>
            <div className="form-control">
                <label >{label}</label>
                <FastField name={name}  {...rest}>
                    {({ field }) => {
                        
                        return options.map(option => {
                            console.log(field);
                            return (
                                <React.Fragment key={option.key}>
                                    <input type="checkbox" id={option.key}  {...field} value={option.value} checked={field.value.includes(option.value)}
                                    />
                                    <label htmlFor={option.value}>{option.value}</label>
                                </React.Fragment>
                            )
                        })
                    }
                    }
                </FastField>
                <div id="error" className="text-red-500">
                    <ErrorMessage name={name} />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import {formik, Formik, Form, Field, ErrorMessage, FieldArray,FastField, useFormik} from 'formik'
import * as Yup from 'yup'
import Input from './Input'
import CustomInput from './CustomInput'
import { useEffect,useState } from 'react'
import {validateForm} from 'formik'
export default function YoutubeForm() {
    const [formvalues,setformvalues] = useState(null)

    const initialValues = {
        name: '',
        email: '',
        channel: '',
        username: '',
        comments: "",
        social: {
            facebook: '',
            twitter: ''
        },
        hello: "",
        phoneNumbers: [],
        phNumbers: [''],
    }

    const SavedValues = {
        name: 'pradeep',
        email: 'p@example.com',
        channel: 'wardengaming',
        username: 'pradedepkumar',
        comments: "Welcome to My channel",
        social: {
            facebook: 'p@facebook.com',
            twitter: 'p@twitter.com'
        },
        hello: "phello",
        phoneNumbers: [],
        phNumbers: [''],
    }


    const onSubmit = (values,onSubmit) => {
        
        //api section
        onSubmit.setSubmitting(false)
        console.log(onSubmit);
        onSubmit.resetForm()
    }

    const validate = (values) => {
        let errors = {}
        if (!values.name) {
            errors.name = 'Required'

        }
        if (!values.email) {
            errors.email = 'Required'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format'
        }
        if (!values.channel) {
            errors.channel = 'Required'
        }
        // console.log('errors', errors);
        return errors
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
        email: Yup.string().required('Required!').email('Invalid email format'),
        channel: Yup.string().required('Required!')

    })

    const validateComments = (value) =>{
        let error
        if(!value){
            error = 'Required'
        }
        return error
    }   



    console.log('form values',formvalues)

    return (
        <>

            <Formik initialValues={formvalues?formvalues:initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
                {
                    (formik) =>{
                        // console.log(formik);
                        return (
                        <Form>
                    <Input type="text" name="name" id="name" ringcolor="ring-rose-500" placeholder="Name" />

                    <Input type="email" name="email" id="email" ringcolor="ring-rose-500" placeholder="Email" />

                    <Input type="text" name="channel" id="channel" ringcolor="ring-rose-500" placeholder="Channel" />

                    <Input placeholder="facebook" name='social.facebook' id="facebook" ringcolor="ring-rose-500" />

                    <Input placeholder="twitter" name='social.twitter' id="twitter" ringcolor="ring-rose-500" />


                    <Input as='textarea' name="comments" placeholder="comments" id="comments" ringcolor="ring-rose-500" className="border-2 rounded-md p-1" validate={validateComments}/>

                    <CustomInput id="hello" name="hello" placeholder="hello" className="bg-red-500" />

                    <Input type="phone" id="primaryph" name="phoneNumbers[0]" placeholder="Primary Phone Number" />
                    <Input type="phone" id="secondaryph" name="phoneNumbers[1]" placeholder="Secondary Phone Number" />


                    <div className='form-control'>
                        <label>List of phone numbers</label>
                        <FieldArray name="phNumbers">
                            {
                                (fieldArrayProps) => {
                                    
                                    const { push, remove, form, pop } = fieldArrayProps
                                    // console.log('form errors',form.errors);
                                    const { values } = form
                                    const { phNumbers } = values
                                    return (
                                        <div>
                                            {phNumbers.map((phNumber, index) => (
                                                
                                                    <div className="flex my-auto" key={index}>

                                                        <FastField name={`phNumbers[${index}]`} />
                                                        {index > 0 && (
                                                            <button type='button' onClick={() => remove(index)} className="mb-3 border-r-[2px] bg-gray-300   px-[13px]">
                                                                -
                                                            </button>
                                                        )}
                                                        <button type='button' className='mb-3 bg-gray-300   px-[10px]' onClick={() => push('')}>
                                                            +
                                                        </button>
                                                    </div>

                                                
                                            ))}

                                        </div>
                                    )


                                }
                            }
                        </FieldArray>
                    </div>
                    {/* <button type="button"  className="border-white border-2 bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 focus:ring-[6px] focus:ring-rose-600 focus:ring-opacity-50 transition-all fade-in-out p-1 rounded-md text-white my-3" onClick={()=>formik.validateForm()
                    }>Validate all</button>
                    <button type="button"  className="border-white border-2 bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 focus:ring-[6px] focus:ring-rose-600 focus:ring-opacity-50 transition-all fade-in-out p-1 rounded-md text-white my-3" onClick={()=>formik.validateField('comments')
                    }>Validate comments</button> */}



                    <button  disabled={!formik.isValid || !formik.dirty || formik.isSubmitting} type="submit" className="border-white border-2 bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 focus:ring-[6px] focus:ring-rose-600 focus:ring-opacity-50 transition-all fade-in-out p-1 rounded-md text-white my-3">Submit</button>
                    <button  type="button" onClick={()=>setformvalues(SavedValues)
}                
                    className="border-white border-2 bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 focus:ring-[6px] focus:ring-rose-600 focus:ring-opacity-50 transition-all fade-in-out p-1 rounded-md text-white my-3" >Save Your Data</button>
                    <button  type="reset" 
                    className="border-white border-2 bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 focus:ring-[6px] focus:ring-rose-600 focus:ring-opacity-50 transition-all fade-in-out p-1 rounded-md text-white my-3" >Reset</button>
                        </Form>
                        )
                    }
                }
            </Formik>
        </>
    )
}

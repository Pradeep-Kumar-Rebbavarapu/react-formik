import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function OldYoutubeForm() {


    const  initialValues = {
        name: '',
        email: '',
        channel: '',
        username: ''
    }



    const onSubmit = (values) => {
        console.log('output values', values)
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
        console.log('errors', errors);
        return errors
    }

    const validationSchema = Yup.object({
        name:Yup.string().required('Required'),
        email:Yup.string().required('Required').email('Invalid email format'),
        channel:Yup.string().required('Required')
    })


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })



    // console.log(formik);
    console.log(Yup);
    // console.log('input values', formik.values);
    // console.log('error values', formik.errors);
    // console.log('visited fields', formik.touched);
    return (
        <div>
            <h1>Youtube Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                {formik.touched.name && formik.errors.name?(
                    <div id="error">{formik.errors.name}</div>
                ):(
                    null
                )}
                <input className="focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 focus:transition-all outline-none focus:fade-in-out" type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur = {formik.handleBlur}/>

                <label htmlFor="email">E-mail</label>
                {formik.touched.email && formik.errors.email?(
                    <div id="error">{formik.errors.email}</div>
                ):(
                    null
                )}
                <input className="focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 focus:transition-all outline-none focus:fade-in-out" type="email" id='email' name="email" onChange={formik.handleChange} value={formik.values.email} onBlur = {formik.handleBlur}/>
                

                <label htmlFor="channel">Channel</label>
                {formik.touched.channel && formik.errors.channel?(
                    <div id="error">{formik.errors.channel}</div>
                ):(
                    null
                )}
                <input className="focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 focus:transition-all outline-none focus:fade-in-out" type="text" id="channel" onChange={formik.handleChange} value={formik.values.channel} name="channel" onBlur = {formik.handleBlur}/>
                
                <button  type="submit" className="border-white border-2 bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 focus:ring-[6px] focus:ring-rose-600 focus:ring-opacity-50 transition-all fade-in-out p-1 rounded-md text-white ">Submit</button>
            </form>
        </div>
    )
}

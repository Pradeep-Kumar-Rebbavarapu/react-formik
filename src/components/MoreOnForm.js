import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
export default function MoreOnForm() {
    const dropdownOption = [
        { key: 'Select an option', value: '' },
        { key: '1', value: 'option1' },
        { key: '2', value: 'option2' },
        { key: '3', value: 'option3' },
    ]
    const radioOption = [
        { key: '1', value: 'roption1' },
        { key: '2', value: 'roption2' },
        { key: '3', value: 'roption3' },
    ]
    const checkOption = [
        { key: '1', value: 'coption1' },
        { key: '2', value: 'coption2' },
        { key: '3', value: 'coption3' },
    ]
    let initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkOption:[],
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkOption: Yup.array().required('Required'),
    })
    const onSubmit = (values) => {
        console.log('form data', values);
    }

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik =>
                        <Form>
                            <FormikControl control='input' ringcolor="ring-rose-500" name="email" type="email" label="Email" className="" />

                            <FormikControl control="textarea" name="description" label="Description" type="text" />

                            <FormikControl control="select" name="selectOption" label="Select The Topic" type="text" options={dropdownOption} />

                            <FormikControl control="radio" name="radioOption" label="Radio Topic" options={radioOption} />

                            <FormikControl control="checkbox" name="checkOption" label="Checkbox Topic" options={checkOption}/>


                            <button type="submit">Submit</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}

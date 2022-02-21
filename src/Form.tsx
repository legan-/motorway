import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { FormWrapper } from 'components/FormWrapper/FormWrapper';
import { InputField } from 'components/InputField/InputField';

const noSpaceRe = /^\S*$/;
const salaryRe = /^\d+-\d+$/;
const colorsRe = /^\D+$/;

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name required').matches(noSpaceRe, 'No spaces allowed'),
  email: Yup.string()
    .required('Email required')
    .email('Must be a valid email')
    .matches(noSpaceRe, 'No spaces allowed'),
  dateOfBirth: Yup.date().required('Date of birth required'),
  color: Yup.string()
    .required('Favourite color required')
    .matches(colorsRe, 'Should be a string')
    .matches(noSpaceRe, 'No spaces allowed'),
  salary: Yup.string()
    .required('Salary required')
    .matches(salaryRe, 'Should have format: xxx-xxx')
    .matches(noSpaceRe, 'No spaces allowed'),
});

export const Form = () => {
  return (
    <>
      <h1 className="title">Form</h1>
      <Formik
        initialValues={{ name: '', email: '', dateOfBirth: '', color: '', salary: '' }}
        validationSchema={formValidationSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          setTimeout(() => {
            let errors = {};
            const [minSalary, maxSalary] = values.salary.split('-');

            if (maxSalary < minSalary) {
              errors = {
                ...errors,
                salary: 'Min salary should be greater that max salary',
              };
            }

            if (new Date(values.dateOfBirth) > new Date()) {
              errors = {
                ...errors,
                dateOfBirth: 'Date of birth should be before today',
              };
            }

            if (Object.keys(errors).length) {
              setErrors(errors);
            }

            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <FormWrapper handleSubmit={handleSubmit} isSubmitting={isSubmitting}>
            <InputField
              label="Name"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              errors={errors.name}
              touched={touched.name}
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              errors={errors.email}
              touched={touched.email}
            />

            <InputField
              label="Date of birth"
              name="dateOfBirth"
              type="date"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.dateOfBirth}
              errors={errors.dateOfBirth}
              touched={touched.dateOfBirth}
            />

            <InputField
              label="Favourite color"
              name="color"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.color}
              errors={errors.color}
              touched={touched.color}
            />

            <InputField
              label="Salary"
              name="salary"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.salary}
              errors={errors.salary}
              touched={touched.salary}
            />
          </FormWrapper>
        )}
      </Formik>
    </>
  );
};

import { FormikHandlers } from 'formik';
import React, { HTMLInputTypeAttribute, VFC } from 'react';

import './InputField.css';

type InputFieldProps = {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  errors?: string;
  touched?: boolean;
  onBlur: FormikHandlers['handleBlur'];
  onChange: FormikHandlers['handleChange'];
};

export const InputField: VFC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  errors,
  touched,
  onBlur,
  onChange,
}) => {
  return (
    <div className="input-field">
      <label className={errors && touched ? 'error-text' : ''} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={errors && touched ? 'error-border' : ''}
        onBlur={onBlur}
        onChange={onChange}
      />
      {errors && touched && <span className="hint error-text">{errors}</span>}
    </div>
  );
};

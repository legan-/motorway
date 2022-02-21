import React, { FC } from 'react';

import './FormWrapper.css';

type FormWrapperProps = {
  handleSubmit: () => void;
  isSubmitting: boolean;
};

export const FormWrapper: FC<FormWrapperProps> = ({ children, handleSubmit, isSubmitting }) => {
  return (
    <form className="form-wrapper" onSubmit={handleSubmit}>
      {children}
      <button className="button" type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

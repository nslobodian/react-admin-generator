import React from 'react'
import s from './InputField.scss'

export const InputField = ({ input, meta: { submitFailed, error, asyncValidating, touched }, forceShowErrors, textarea, className, label, noBlur, ...props }) => (
  <div className={asyncValidating ? 'relative' : className || ''}>
    { label && <div className='text-muted'>{label}</div>}
    {textarea
      ? <textarea {...input}
        className='form-control'
        {...props}
        onBlur={noBlur ? () => {} : input.onBlur}
      />
      : <input
        {...input}
        className='form-control'
        type='text'
        onBlur={noBlur ? () => {} : input.onBlur}
        {...props}
      />
    }
    {asyncValidating && <div className={s.asyncValidating} />}

    {(submitFailed || forceShowErrors || touched) && error &&
    <div className='alert alert-danger m-t-1' role='alert'>{error.err || error}</div>}
  </div>
)

export default InputField

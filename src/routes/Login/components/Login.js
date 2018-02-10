import React from 'react'
import PropTypes from 'prop-types'
import s from './Login.scss'
import Field from 'redux-form/es/Field'
import reduxForm from 'redux-form/es/reduxForm'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaCertificate from 'react-icons/lib/fa/certificate'

export const LoginForm = ({ handleSubmit, valid, submitFailed, submitting }) =>
  <div className={s.Login}>
    <div className={s.formWrapper}>
      <h4>Herlandia Admin</h4>
      <form
        onSubmit={handleSubmit}
      >
        {submitFailed &&
        <div className='alert alert-danger' role='alert'>Incorrect <b>Email</b> or <b>Password</b></div>
        }
        <div className='form-group'>
          <div className='input-group'>
            <span className='input-group-addon'><FaEnvelope /></span>
            <Field
              component='input'
              className='form-control'
              name='email'
              type='email'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='input-group'>
            <span className='input-group-addon'><FaCertificate /></span>
            <Field
              className='form-control'
              component='input'
              name='password'
              type='password'
              placeholder='Password'
            />
          </div>
        </div>
        <button
          type='submit'
          disabled={!valid || submitting}
          className='btn btn-success btn-block btn-lg'
        >
          Login
        </button>
      </form>
    </div>
  </div>

const requiredFields = [
  'email',
  'password',
]

const validate = values => {
  let errors = {}

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'is required'
    }
  })

  return errors
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool,
}

export default reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm)

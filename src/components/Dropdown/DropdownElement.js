import React from 'react'
import Select from 'react-select'
import pure from 'recompose/pure'
import s from './Dropdown.scss'

export default pure(({ input: { value, onChange, onBlur, name }, meta: { touched, invalid, error }, label, forceShowErrors, blurable = true, style, ...props }) =>
  <div style={style}>
    {label && <span>{label}</span>}
    <Select value={value} searchable={false} clearable={false} {...props}
      onChange={val => {
        onChange(val)
        blurable && onBlur(val)
      }}
      className={props.multi && s.multiValue} />
    {(touched || forceShowErrors) && invalid &&
    <div className='alert alert-danger m-t-1' role='alert'>{error}</div>}
  </div>
)

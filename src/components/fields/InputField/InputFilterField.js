import React from 'react'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'

export const enhance = compose(
  withState('debounce', 'setDebounce', null),
  withHandlers({
    handleChange: ({ setDebounce, input: { onChange, name }, changeAttempt, debounce }) => ({ target: { value } }) => {
      onChange(value)
      clearTimeout(debounce)
      setDebounce(setTimeout(() => {
        changeAttempt(name, value)
      }, 500))
    },
  })
)

export default enhance(({ input: { value, name, onBlur }, placeholder = '', handleChange, className, type = 'text' }) =>
  <input value={value} name={name} onChange={handleChange} placeholder={placeholder} onBlur={onBlur} className={className} type={type} />
)

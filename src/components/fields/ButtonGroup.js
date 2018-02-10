import React from 'react'
import cn from 'classnames'
import s from './FieldsStyles.scss'

export default ({ input: { onChange, value }, meta: { submitFailed, invalid, error }, options, disabled }) => <div>
  <div
    className={cn('btn-group', s.btnGroup)} role='group'
    aria-label='ButtonGroup'>
    {
      options.map(({ label, val }) =>
        <button type='button'
          key={label}
          style={{width: `${100 / options.length}%`}}
          disabled={disabled}
          className={cn('btn btn-default', value === val && 'btn-primary')}
          onClick={() => {
            value !== val && onChange(val)
          }}>{label}
        </button>)
    }
  </div>
  {submitFailed && invalid && <div className='alert alert-danger m-t-1' role='alert'>{error.err || error}</div>}
</div>

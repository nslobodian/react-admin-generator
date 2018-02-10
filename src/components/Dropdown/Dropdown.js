import React from 'react'
import { withState } from 'recompose'
import cn from 'classnames'
import s from './Dropdown.scss'

export const Dropdown = withState('dropdown', 'toggleDropdown', false)(({ dropdown, toggleDropdown, children, title, type, noHideOnSelect }) =>
  <div className={cn('btn-group btn-block', s.Dropdown)}>
    <div className={cn('dropdown', dropdown && 'open')}>
      <button className={`btn btn-${type} dropdown-toggle btn-block`}
        type='button' data-toggle='dropdown' aria-haspopup='true'
        aria-expanded={dropdown} onClick={() => toggleDropdown(v => !v)}>
        <div className='pull-left'>{title}</div>
        <div className={cn('pull-right caret', s.caret)} />
      </button>
      <ul className='dropdown-menu btn-block' onClick={() => !noHideOnSelect && toggleDropdown(v => !v)}>
        {children}
      </ul>
    </div>
  </div>
)

export default Dropdown

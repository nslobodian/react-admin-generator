import React from 'react'
import pure from 'recompose/pure'
import Dropdown from 'react-select'
import s from './PaginationWrapper.scss'

const perPageOptions = [
  { value: 10, label: 10 },
  { value: 25, label: 25 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
]

export const DropdownWrapper = pure(({ options, onChangeFilter, perPage }) =>
  <Dropdown options={perPageOptions}
    onChange={option => option && onChangeFilter({ perPage: option.value })}
    value={{ label: perPage }}
    searchable={false}
    clearable={false}
  />
)

export default pure(({ onChangeFilter, total, perPage, label, short }) =>
  <div className={s.CountFilter}>
    <span>Showing</span>
    <DropdownWrapper options={perPageOptions} onChangeFilter={onChangeFilter} perPage={perPage} />
    {!short && <span>of {total} {label}</span>}
  </div>
)

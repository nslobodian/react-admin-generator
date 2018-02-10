import React from 'react'
import CountFilter from './CountFilter'
import Pagination from 'react-js-pagination'
import s from './PaginationWrapper.scss'
import Dropdown from 'react-select'
import pure from 'recompose/pure'

export const DropdownWrapper = pure(({ options, toggleChangeHandle, value, dropdownConfig = {} }) =>
  <Dropdown options={options} value={value}
    clearable={false} onChange={toggleChangeHandle}
    labelKey={dropdownConfig.labelKey || 'label'}
    valueKey={dropdownConfig.valueKey || 'value'}
/>)

export const PaginationRow = ({ perPage, pages, page, handleChange, totalCount, label, options, toggleChangeHandle, perUser, short, dropdownConfig, dropdownValue }) =>
  <div className='row'>
    {!!options &&
    <div className='col-sm-3 col-xs-6'>
      <div className={s.additionalComponentWrapper}>
        <DropdownWrapper options={options} toggleChangeHandle={toggleChangeHandle} value={dropdownConfig ? dropdownValue : options[perUser ? 0 : 1]} dropdownConfig={dropdownConfig} />
      </div>
    </div>
    }
    <div className={`col-lg-6 col-sm-${short ? '6' : '4'} col-xs-6`}>
      <CountFilter perPage={perPage} total={totalCount} onChangeFilter={handleChange} label={label} short={short} />
    </div>
    <div className={`col-lg-${options ? '3' : '6'} col-sm-${options ? '5' : short ? '6' : '8'} col-xs-12`}>
      <div className={s.Pagination}>
        <Pagination
          activePage={page}
          itemsCountPerPage={perPage}
          totalItemsCount={totalCount || 0}
          pageRangeDisplayed={short ? 2 : 5}
          linkClass={short ? 'smallPagination' : ''}
          onChange={val => handleChange({ page: val })}
        />
      </div>
    </div>
  </div>

export default PaginationRow

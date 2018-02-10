import React from 'react'
import PaginationRow from './PaginationRow'

export const PaginationWrapper = ({ children, options, ...props }) =>
  <div>
    <PaginationRow {...props} options={options} />
    <div className='row'>
      <div className='table-responsive'>
        {children}
      </div>
    </div>
    <PaginationRow {...props} options={options} />
  </div>

export default PaginationWrapper

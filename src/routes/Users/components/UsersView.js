import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UsersTable from './UsersTable'
import PaginationWrapper from 'components/PaginationWrapper'
import Spinner from 'components/Spinner'

class UsersView extends Component {
  componentDidMount () {
    this.props.initChangeFilter(this.props.location.query)
  }

  componentWillUnmount () {
    this.props.resetFilters()
  }

  render () {
    const { users, handleChangeFilter, getUsersPagination, goToUserDetails, getUsersLoading, pagination } = this.props
    return (
      <div>
        <div className='panel panel-default'>
          <div className='panel-heading'>Members</div>
          {getUsersLoading && <Spinner />}
          <div>
            <PaginationWrapper {...pagination}
              label='members'
              handleChange={getUsersPagination}
            >
              {
                users &&
                <UsersTable users={users}
                  handleChangeFilter={handleChangeFilter}
                  goToUserDetails={goToUserDetails} />
              }
            </PaginationWrapper>
          </div>
        </div>
      </div>
    )
  }
}

UsersView.propTypes = {
  handleChangeFilter: PropTypes.func,
  users: PropTypes.array,
}

export default UsersView

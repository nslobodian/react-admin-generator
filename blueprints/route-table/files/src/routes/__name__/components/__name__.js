import React, { Component } from 'react'
import s from './<%= pascalEntityName %>.scss'
import PaginationWrapper from 'components/PaginationWrapper'
import <%= pascalEntityName %>Table from './<%= pascalEntityName %>Table'
import Spinner from 'components/Spinner'
import ConfirmDeleteModal from 'components/modals/ConfirmDeleteModal'

export class <%= pascalEntityName %> extends Component {

  componentDidMount() {
  this.props.get<%= pascalEntityName %>Attempt()
}

  componentWillUnmount() {
    this.props.resetFilters()
  }

  render() {
    const {
  <%= pascalEntityName.toLowerCase() %>, pagination, get<%= pascalEntityName %>Loading, change<%= pascalEntityName %>Pagination,
      change<%= pascalEntityName %>Filter, showDetailsModal, delete<%= pascalEntityName %>Attempt
    } = this.props
      return (
      <div className='container'>
        <div className='panel panel-default'>
          <div className='panel-heading'><%= pascalEntityName %></div>
            <div className='panel-body'>
              {get<%= pascalEntityName %>Loading && <Spinner />}
              <div>
                <PaginationWrapper
                {...pagination}
                label='items'
                handleChange={change<%= pascalEntityName %>Pagination}
                >
                  <<%= pascalEntityName %>Table <%= pascalEntityName.toLowerCase() %>={<%= pascalEntityName.toLowerCase() %>}
                                        showDetailsModal={showDetailsModal}
                                        deleteAttempt={delete<%= pascalEntityName %>Attempt}
                                        filterChangeHandler={change<%= pascalEntityName %>Filter}/>
                </PaginationWrapper>
              </div>
          </div>
        </div>
        <ConfirmDeleteModal/>
      </div>
      )
    }
}

export default <%= pascalEntityName %>

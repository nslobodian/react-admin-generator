import React, { Component } from 'react'
import s from './Teams.scss'
import PaginationWrapper from 'components/PaginationWrapper'
import TeamsTable from './TeamsTable'
import Spinner from 'components/Spinner'
import ConfirmDeleteModal from 'components/modals/ConfirmDeleteModal'

export class Teams extends Component {

  componentDidMount() {
  this.props.getTeamsAttempt()
}

  componentWillUnmount() {
    this.props.resetFilters()
  }

  render() {
    const {
  teams, pagination, getTeamsLoading, changeTeamsPagination,
      changeTeamsFilter, showDetailsModal, deleteTeamsAttempt
    } = this.props
      return (
      <div className='container'>
        <div className='panel panel-default'>
          <div className='panel-heading'>Teams</div>
            <div className='panel-body'>
              {getTeamsLoading && <Spinner />}
              <div>
                <PaginationWrapper
                {...pagination}
                label='items'
                handleChange={changeTeamsPagination}
                >
                  <TeamsTable teams={teams}
                                        showDetailsModal={showDetailsModal}
                                        deleteAttempt={deleteTeamsAttempt}
                                        filterChangeHandler={changeTeamsFilter}/>
                </PaginationWrapper>
              </div>
          </div>
        </div>
        <ConfirmDeleteModal/>
      </div>
      )
    }
}

export default Teams

import React, { Component } from 'react'
import s from './Projects.scss'
import PaginationWrapper from 'components/PaginationWrapper'
import ProjectsTable from './ProjectsTable'
import Spinner from 'components/Spinner'
import ConfirmDeleteModal from 'components/modals/ConfirmDeleteModal'

export class Projects extends Component {

  componentDidMount() {
  this.props.getProjectsAttempt()
}

  componentWillUnmount() {
    this.props.resetFilters()
  }

  render() {
    const {
  projects, pagination, getProjectsLoading, changeProjectsPagination,
      changeProjectsFilter, showDetailsModal, deleteProjectsAttempt
    } = this.props
      return (
      <div className='container'>
        <div className='panel panel-default'>
          <div className='panel-heading'>Projects</div>
            <div className='panel-body'>
              {getProjectsLoading && <Spinner />}
              <div>
                <PaginationWrapper
                {...pagination}
                label='items'
                handleChange={changeProjectsPagination}
                >
                  <ProjectsTable projects={projects}
                                        showDetailsModal={showDetailsModal}
                                        deleteAttempt={deleteProjectsAttempt}
                                        filterChangeHandler={changeProjectsFilter}/>
                </PaginationWrapper>
              </div>
          </div>
        </div>
        <ConfirmDeleteModal/>
      </div>
      )
    }
}

export default Projects

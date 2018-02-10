import React from 'react'
import s from './Projects.scss'
import { pure } from 'recompose'
import { reduxForm } from 'redux-form'
import Link from 'react-router/lib/Link'

import urls from 'utils/urls'
import { convertDate } from 'utils/helpers'
import generateFilters from 'utils/componentGenerators'
import DeleteButtonWithConfirmation from 'components/DeleteButtonWithConfirmation'

const fields = [
  { component: 'input', name: 'id' },
  { component: 'input', name: 'name' },
  { component: 'input', name: 'leader' },
  { component: 'input', name: 'members' },
  { component: 'input', name: 'area' },
]

const Projects = pure(({ projects, filterChangeHandler, showDetailsModal, deleteAttempt }) =>
  <table className='table table-hover'>
    <thead>
      <tr>
        <td className='td-md'>ID</td>
        <td className='td-md'>Name</td>
        <td className='td-md'>Leader</td>
        <td className='td-md'>team</td>
        <td className='td-md'>avaliablePostions</td>
        <td width='10%' />
        <td width='10%' />
      </tr>
      <tr>
        {generateFilters(filterChangeHandler, fields)}
        <td />
        <td />
      </tr>
    </thead>
    <tbody>
      {
      projects.length > 0
        ? projects.map(({ id, name, leader = {}, members, team, avaliablePostions }) =>
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>
              <Link to={`${urls.user}/${leader.userId}`}>{leader.name}</Link>
            </td>
            <td>{team}</td>
            <td>{avaliablePostions}</td>
            <td className='text-right'>
              <button className='btn btn-primary' onClick={() => {
                showDetailsModal({ projectId: id })
              }}>Edit
            </button>
            </td>
            <td><DeleteButtonWithConfirmation onDelete={deleteAttempt} deletingId={id}
              item='projects' /></td>
          </tr>
      )
        : <tr className='text-center'>
          <td colSpan='4'><h1>No Projects</h1></td>
        </tr>
    }
    </tbody>
  </table>
)
export default reduxForm({
  form: 'ProjectsTable',
})(Projects)

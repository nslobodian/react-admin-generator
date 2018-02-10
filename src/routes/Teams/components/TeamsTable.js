import React from 'react'
import s from './Teams.scss'
import { pure } from 'recompose'
import { reduxForm } from 'redux-form'
import Link from 'react-router/lib/Link'

import urls from 'utils/urls'
import { convertDate } from 'utils/helpers'
import generateFilters from 'utils/componentGenerators'
import DeleteButtonWithConfirmation from 'components/DeleteButtonWithConfirmation'

const fields = [
  { component: 'input', name: 'id' },
  { component: 'input', name: 'prop' },
]

const Teams = pure(({ teams, filterChangeHandler, showDetailsModal, deleteAttempt }) =>
  <table className='table table-hover'>
    <thead>
      <tr>
        <td className='td-md'>ID</td>
        <td className='td-md'>Prop</td>
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
      teams.length > 0
        ? teams.map(({ id, prop, userId }) =>
          <tr key={id}>
            <td>{prop}</td>
            <td className='text-right'>
            <button className='btn btn-primary' onClick={() => {
              showDetailsModal({ teamID: id, prop })
            }}>Edit
            </button>
          </td>
            <td>
            <Link to={`${urls.user}/${userId}`}>{userId}</Link>
          </td>
            <td><DeleteButtonWithConfirmation onDelete={deleteAttempt} deletingId={id}
            item='teams' /></td>
          </tr>
      )
        : <tr className='text-center'>
          <td colSpan='4'><h1>No Teams</h1></td>
        </tr>
    }
    </tbody>
  </table>
)
export default reduxForm({
  form: 'TeamsTable',
})(Teams)

import React from 'react'
import s from './<%= pascalEntityName %>.scss'
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

const <%= pascalEntityName %> = pure(({ <%= pascalEntityName.toLowerCase() %>, filterChangeHandler, showDetailsModal, deleteAttempt }) =>
  <table className='table table-hover'>
    <thead>
    <tr>
      <td className='td-md'>ID</td>
      <td className='td-md'>Prop</td>
      <td width='10%'/>
      <td width='10%'/>
    </tr>
    <tr>
      {generateFilters(filterChangeHandler, fields)}
      <td/>
      <td/>
    </tr>
    </thead>
    <tbody>
    {
      <%= pascalEntityName.toLowerCase() %>.length > 0
        ?<%= pascalEntityName.toLowerCase() %>.map(({ <%= pascalEntityName.toLowerCase() %>id, prop, userId }) =>
        <tr key={<%= pascalEntityName.toLowerCase() %>id}>
          <td>{prop}</td>
          <td className='text-right'>
            <button className='btn btn-primary' onClick={() => {
                showDetailsModal({ <%= pascalEntityName.toLowerCase() %>id, prop })
              }}>Edit
            </button>
          </td>
          <td>
            <Link to={`${urls.user}/${userId}`}>{userId}</Link>
          </td>
           <td><DeleteButtonWithConfirmation onDelete={deleteAttempt} deletingId={<%= pascalEntityName.toLowerCase() %>id}
          item='<%= pascalEntityName.toLowerCase() %>'/></td>
        </tr>
      )
        : <tr className='text-center'>
        <td colSpan='4'><h1>No <%= pascalEntityName %></h1></td>
      </tr>
    }
    </tbody>
  </table>
)
export default reduxForm({
  form: '<%= pascalEntityName %>Table'
})(<%= pascalEntityName %>)

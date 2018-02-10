import React from 'react'
import Field from 'redux-form/es/Field'
import reduxForm from 'redux-form/es/reduxForm'
import pure from 'recompose/pure'

const areas = {
  igv: <label className='label label-success'>IGV</label>,
}

const program_statuses = {
  completed: <label className='label label-info'>Completed</label>,
}

const ldm_statuses = {
  false: <label className='label label-danger'>Nope</label>,
}

export const UsersTable = pure(({ users, handleChangeFilter, goToUserDetails }) =>
  <div className='col-xs-12'>
    <div className='table-responsive'>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>EXPA ID</td>
            <td>Full Name</td>
            <td>Position</td>
            <td>Area</td>
            <td>IXP</td>
            <td>LDM</td>
            <td />
          </tr>
          <tr>
            {
              fields.map(field =>
                <td key={field.value}>
                  <Field
                    component='input'
                    className='form-control'
                    name={field.value}
                    placeholder={field.name}
                    onChange={(pros, value) => handleChangeFilter(field.value, value)}
                  />
                </td>
              )
            }
            <td />
          </tr>
        </thead>
        <tbody>
          {users.map(({ expa_id, surname, name, position, area, ixp, ldm, id }) =>
            <tr key={id}>
              <td>{expa_id}</td>
              <td>{`${name} ${surname}`}</td>
              <td>{position}</td>
              <td>{areas[area]}</td>
              <td>{program_statuses[ixp]}</td>
              <td>{ldm_statuses[ldm]}</td>
              <td>
                <button className='btn btn-primary' onClick={() => goToUserDetails(id)}>View</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)

const fields = [
  { name: 'Expa Id', value: 'expa_id' },
  { name: 'Full Name', value: 'full_name' },
  { name: 'Position', value: 'position' },
  { name: 'Area', value: 'area' },
  { name: 'IXP', value: 'ixp' },
  { name: 'LDM', value: 'ldm' },
]

export default reduxForm({
  form: 'UsersTable',
})(UsersTable)

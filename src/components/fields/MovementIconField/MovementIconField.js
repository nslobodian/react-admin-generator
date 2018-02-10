import React from 'react'
import Field from 'redux-form/lib/Field'
import DropdownField from 'components/Dropdown/DropdownElement'

const MovementIconField = ({ movementIcons, name = 'icon', placeholder = 'Choose An Icon', label = 'Icon', notifications }) =>
  <div className='form-group'>
    <label htmlFor={name} className='text-muted'>{label}</label>
    <Field
      name={name}
      placeholder={placeholder}
      options={movementIcons}
      component={DropdownField}
      labelKey={notifications ? 'title' : 'pictureUrl'}
      valueKey='iconId'
      optionRenderer={notifications ? null : ({ pictureUrl, movementIconId }) => <img src={pictureUrl}
        alt={movementIconId} />}
      valueRenderer={notifications ? null : ({ pictureUrl }, movementIconId) => <img src={pictureUrl}
        alt={movementIconId} />}
    />
  </div>

export default MovementIconField

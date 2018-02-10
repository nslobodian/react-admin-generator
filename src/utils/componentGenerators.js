import React from 'react'
import Field from 'redux-form/es/Field'

import { dateHandler, dropDownHandler, multiSelectHandler, rangeHandler, textHandler } from './onChangeFilterHandlers'
import InputFilterField from 'components/fields/InputField/InputFilterField'
import DropdownElement from 'components/Dropdown/DropdownElement'
import RangeDatePicker from 'components/RangeDatePicker'
import RangeField from 'components/fields/RangeField'

export default (filterChangeHandler, components) =>
  components.filter(({name}) => name).map(({ component, name, ...props }) => {
    switch (component) {
      case 'RangeDatePicker':
        return <td key={name} className='text-muted'>
          <Field
            component={RangeDatePicker}
            className='form-control'
            onChange={dateHandler(filterChangeHandler, name)}
            name={name}
            {...props}
          />
        </td>
      case 'DropdownElement':
        return <td key={name}>
          <Field
            component={DropdownElement}
            placeholder='All'
            onChange={dropDownHandler(filterChangeHandler, name, props.valueKey)}
            name={name}
            {...props}
          />
        </td>
      case 'DropdownElementMulti':
        return <td key={name}>
          <Field
            component={DropdownElement}
            placeholder='All'
            onChange={multiSelectHandler(filterChangeHandler, name, props.valueKey)}
            name={name}
            multi
            {...props}
          />
        </td>
      case 'input':
        return <td key={name}>
          <Field
            component={InputFilterField}
            className='form-control'
            changeAttempt={textHandler(filterChangeHandler, name)}
            name={name}
            placeholder='Filter'
            {...props}
          />
        </td>
      case 'RangeField':
        return <td key={name}>
          <Field
            component={RangeField}
            className='form-control'
            placeholder='Set Range'
            onChange={rangeHandler(filterChangeHandler, name)}
            name={name}
            {...props}
          />
        </td>
      default:
        return <td key={name} />
    }
  })

const TableLanguage = ({ label }) => <span>{label || '-'}</span>
export const renderForLanguages = (data, countries, childComponent) => <td>
  {
    countries.map(({ language: { code } }, i) => <div key={i} className='m-b-03'>{React.createElement(childComponent || TableLanguage, {label: data ? data[code] : ''})}</div>)
  }
</td>

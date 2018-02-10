import React from 'react'
import FormSection from 'redux-form/es/FormSection'
import FaAngleDown from 'react-icons/lib/fa/chevron-down'
import FaAngleUp from 'react-icons/lib/fa/chevron-up'
import FaClose from 'react-icons/lib/fa/close'

export default ({ name, index, chooseComponent, length, swap, remove, field, ...props }) => <li>
  <div className='panel panel-default'>
    <div className='panel-heading'>
      <div className='clearfix'>
        <div className='pull-left'>{field.type} #{index + 1}</div>
        <div className='pull-right'>
          { index < length - 1 && <span onClick={() => {
            swap(index, index + 1)
          }}><FaAngleDown /></span>}
          {
            index > 0 && <span onClick={() => {
              swap(index, index - 1)
            }}><FaAngleUp /></span>}
          <span onClick={() => {
            remove(index)
          }}><FaClose /></span>
        </div>
      </div>
    </div>
    <div className='panel-body'>
      <FormSection name={name}>
        {chooseComponent(field, props)}
      </FormSection>
    </div>
  </div>
</li>

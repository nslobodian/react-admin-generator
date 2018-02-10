import React from 'react'
import s from './TagsField.scss'
import Dropdown from 'components/Dropdown/DropdownElement'
import ManageTagsModal from './ManageTagsModal/index'
import Field from 'redux-form/es/Field'

export const TagsField = ({ showManageTagsModal, notificationTags, name = 'tags' }) => (
  <div className='form-group'>
    <div className='text-muted clearfix'>
      <div className='pull-left'>Tags</div>
      <div className='pull-right'>
        manage tags <span className={s.manageTagsLink} onClick={showManageTagsModal}>here</span>
      </div>
    </div>
    <Field
      component={Dropdown}
      name={name}
      labelKey='name'
      valueKey='notificationTagId'
      multi
      options={notificationTags}
    />
    <ManageTagsModal />
  </div>
)

export default TagsField

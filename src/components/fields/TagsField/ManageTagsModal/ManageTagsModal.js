import React from 'react'
import reduxForm from 'redux-form/es/reduxForm'
import Field from 'redux-form/es/Field'
import s from './ManageTagsModal.scss'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import { textHandler } from 'utils/onChangeFilterHandlers'
import Pagination from 'react-js-pagination'
import DeleteButtonWithConfirmation from 'components/DeleteButtonWithConfirmation'

export const EditTagNameField = withState('open', 'toggleStatus', false)(withHandlers({
  toggleStatus: ({ toggleStatus }) => () => {
    toggleStatus(n => !n)
  },
})(({ name, notificationTagId, deleteTag, toggleStatus, open, updateTagName }) =>
  <tr>
    <td>
      {open
        ? <Field
          component='input'
          type='text'
          className='form-control'
          name={notificationTagId}
        />
        : name
      }
    </td>
    <td className='EditButton' onClick={toggleStatus}>
      {open
        ? <div onClick={updateTagName}>Save</div>
        : <div>Edit</div>
      }
    </td>
    <td><DeleteButtonWithConfirmation onDelete={deleteTag} deletingId={notificationTagId} item='tag' /></td>
  </tr>
))

export const ManageTagsModal = ({
  createNotificationTag, notificationTags, deleteTag,
  updateTagName, onPageChange, pagination: { page, perPage, totalCount },
  filterChangeHandler,
}) =>
  <div className={s.ManageTagsModal}>
    <div className={s.modalHeader}>Manage Tags</div>
    <div>
      <div className={s.NewTagWrapper}>
        <div className='text-muted'>New Tag</div>
        <Field
          component='input'
          type='text'
          className='form-control'
          name='newTag'
        />
      </div>
      <button className='btn btn-primary' type='button' onClick={createNotificationTag}>Add</button>
    </div>
    <div className={s.TagsTableWrapper}>
      <table className='table'>
        <thead>
          <tr>
            <td colSpan='3'>Tags</td>
          </tr>
          <tr>
            <td colSpan='3'>
              <Field
                component='input'
                type='text'
                className='form-control'
                placeholder='Filter'
                name='tagName'
                onChange={textHandler(filterChangeHandler, 'name')}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {notificationTags.length > 0
            ? notificationTags.map(({ name, notificationTagId }, index) =>
              <EditTagNameField
                key={index}
                name={name}
                notificationTagId={notificationTagId}
                updateTagName={updateTagName(notificationTagId)}
              />
            )
            : <tr>
              <td colSpan='3' className='text-center'>No Tags</td>
            </tr>
          }
          <tr>
            <td colSpan='3' className='text-center'>
              <Pagination
                activePage={page}
                itemsCountPerPage={perPage}
                totalItemsCount={totalCount || 0}
                pageRangeDisplayed={5}
                onChange={onPageChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

export default reduxForm({
  form: 'ManageTagsForm',
})(ManageTagsModal)

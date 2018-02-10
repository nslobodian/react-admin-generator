import React from 'react'
import { compose, withHandlers, withState } from 'recompose'

export const enhance = compose(
  withState('uploaded', 'updateUploaded', false),
  withHandlers({
    handleUploading: ({ updateUploaded, uploadFile, type, input: { onChange } }) => event => {
      updateUploaded(event.target.files[0].name)
      uploadFile
        ? uploadFile(event.target.files[0], type)
        : onChange({ file: event.target.files[0], preview: window.URL.createObjectURL(event.target.files[0]) })
    },
    clearValue: ({ updateUploaded, removeFile, createMod, type, input: { value, onChange } }) => () => {
      createMod
        ? onChange(null)
        : removeFile(value, type)
      updateUploaded(null)
    },
  })
)

export default enhance(({ disabled, clearValue, handleUploading, uploaded, label = 'Invoice', name = 'invoice', withPreview, input: { value }, meta: { submitFailed, invalid, error } }) =>
  <div className='btn-block'>
    {(value || uploaded)
      ? withPreview
        ? <div>
          <img src={value.preview || value || uploaded} alt='Preview' className='img-responsive m-b-1' />
          <button className='text-danger btn-link text-danger btn-link-danger' type='button' onClick={clearValue}>
            Delete {label}</button>
        </div>
        : <div className='btn-block'>
          <a className='truncate' href={value || uploaded} target='_blank'>{value.slice(value.lastIndexOf('/') + 1) || uploaded}</a> | <span className='text-danger btn-link text-danger' onClick={clearValue}>Delete</span>
        </div>
      : <div>
        <div className='text-muted'>{label}</div>
        <label htmlFor='fileField' className='btn btn-primary btn-block' disabled={disabled}>Upload {label}</label>
        <input
          name={name}
          type='file'
          onChange={handleUploading}
          value={undefined}
          disabled={disabled}
          id='fileField'
          className='hidden'
        />
      </div>
    }
    {(submitFailed) && invalid &&
    <div className='alert alert-danger m-t-1' role='alert'>{error.err || error}</div>}
  </div>)

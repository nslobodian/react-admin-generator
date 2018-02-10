import React from 'react'
import Dropzone from 'react-dropzone'
import s from './FieldsStyles.scss'
import cn from 'classnames'

export default ({ label, input, meta, inline, showPreview = true, PreviewComponent, doubleProduct = false, previewValues }) => <div
  className={cn(s.selectPhotoWrap, inline && s.inlineStyles)}>
  {showPreview && (PreviewComponent
    ? <PreviewComponent preview={input.value.preview || input.value} {...previewValues} />
    : !!input.value && <img src={input.value.preview || input.value} alt='Preview' className='img-responsive m-b-1' />)}
  <Dropzone
    onDrop={acceptedFiles => {
      input.onChange(acceptedFiles[0])
    }}
    multiple={false}
    accept='image/*'
  >
    { input.value
      ? <button type='button' className='btn btn-default btn-block'>Change {label}</button>
      : <button type='button' className='btn btn-primary btn-block'>Upload {label}</button>
    }
    {inline && <div className='text-center text-muted'>{`Photo size 498x${doubleProduct ? '320' : '778'}px`}</div>}
  </Dropzone>
  {meta && meta.touched && meta.invalid &&
  <div className='alert alert-danger m-t-1' role='alert'>{meta.error}</div>}
</div>

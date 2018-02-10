import React from 'react'
import 'bootstrap-daterangepicker/daterangepicker.css'
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker'
import FaClockO from 'react-icons/lib/fa/clock-o'
import FaClose from 'react-icons/lib/fa/close'
import { convertDate } from 'utils/helpers'
import s from './RangeDatePicker.scss'

export default ({ input: { onChange, value: { startDate, endDate }, name }, meta: { touched, invalid }, timePicker = true, disabled, label, singleDatePicker = false, placeholder = 'Any time', customTrigger, customOnChange }) =>
  <div className={disabled && s.disabled}>
    {label && <div className='text-muted'>
      {label}
    </div>}
    <div className={s.DatetimeRangePicker}>
      {(!customTrigger && !label) && <div className={s.SVGWrapper}>
        {startDate && <FaClose className={s.FaClose} onClick={() => {
          onChange({})
        }} /> }
        <FaClockO className={startDate && s.FaClockO} />
      </div>}
      <DatetimeRangePicker
        timePicker={timePicker}
        timePicker24Hour
        showDropdowns
        timePickerSeconds
        startDate={startDate}
        endDate={singleDatePicker ? startDate : endDate}
        singleDatePicker={singleDatePicker}
        onApply={(j, { endDate, startDate }) => (customOnChange || onChange)({ endDate, startDate })}
      >
        {label ? (
          <div className='input'>
            <div className='form-control'>{startDate && convertDate(startDate, true)}</div>
          </div>
          )
          : (customTrigger || startDate
          ? <div className={s.ButtonWrapper}>
            <div>{startDate.format('DD.MM.YYYY HH:mm')}</div>
            {!singleDatePicker && <div>{convertDate(endDate, false)}</div>}
          </div>
          : <div className={s.ButtonWrapper}>
            <div>{placeholder}</div>
          </div>)
        }
      </DatetimeRangePicker>
      {touched && invalid &&
      <div className='alert alert-danger m-t-1' role='alert'>{name} is required</div>}
    </div>
  </div>

import React, { Component } from 'react'
import s from './RangeField.scss'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import FaClose from 'react-icons/lib/fa/close'

export default class RangeField extends Component {

  static defaultProps = {
    minValue: 0,
    maxValue: 250,
    placeholder: 'Filter',
  }

  constructor (props) {
    super()
    const { input: { value: { min, max } }, maxValue, minValue } = props
    this.state = {
      stateValue: {
        min: min || minValue,
        max: max || maxValue,
      },
      opened: false,
    }
  }

  toggleInputRange = () => this.setState({ opened: !this.state.opened })

  onChange = ({ min, max }) => this.setState({ stateValue: { min, max } })

  saveValues = () => {
    this.toggleInputRange()
    this.props.input.onChange(this.state.stateValue)
  }

  clearValues = e => {
    e.preventDefault()
    const { maxValue, minValue } = this.props
    this.setState({ stateValue: { min: minValue, max: maxValue } })
    this.props.input.onChange({ min: undefined, max: undefined })
  }

  render () {
    const { input: { name, value }, disabled, maxValue, minValue, placeholder } = this.props
    const { stateValue, opened } = this.state
    return <div>
      <div className={s.rangeInputWrapper}>
        <div className={value.max ? s.inputWrapper : s.inputWrapperDisabled}>
          <span onClick={this.toggleInputRange} className='font-size-12'>
            {
              value.max
                ? <span >{`${value.min}-${value.max}`}</span>
                : <div onClick={this.toggleInputRange}>{placeholder}</div>
            }
          </span>
          <input type='text' name={name} hidden />
          {value.max ? <FaClose onClick={this.clearValues} /> : ''}
        </div>

        {opened &&
          <div className={s.rangeWrapper}>
            <div className={s.range}>
              <InputRange
                maxValue={maxValue}
                minValue={minValue}
                value={stateValue}
                onChange={this.onChange}
                disabled={disabled}
              />
            </div>

            <div className={s.btnGroup}>
              <button type='button' className='btn btn-default btn-xs' onClick={this.toggleInputRange}>Cancel</button>
              <button type='button' className='btn btn-success btn-xs' onClick={this.saveValues}>Save</button>
            </div>
          </div>
        }
      </div>
    </div>
  }
}


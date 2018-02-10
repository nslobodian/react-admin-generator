export const dropDownHandler = (name, valueKey = 'value') => ({ filterChangeHandler }) => val => filterChangeHandler(name, val[valueKey] === 'none' ? undefined : val[valueKey])
export const textHandler = name => ({ filterChangeHandler }) => (pros, value) => filterChangeHandler(name, value)
export const rangeHandler = name => ({ filterChangeHandler }) => ({ min, max }) => {
  filterChangeHandler(`${name}From`, min, false)
  filterChangeHandler(`${name}To`, max)
}
export const dateHandler = name => ({ filterChangeHandler }) => (pros, { endDate, startDate }) => {
  filterChangeHandler(`${name}From`, startDate, false)
  filterChangeHandler(`${name}To`, endDate)
}
export const multiSelectHandler = (name, id) => ({ filterChangeHandler }) => (pros, values) => filterChangeHandler(name, values.map(val => val[id]))

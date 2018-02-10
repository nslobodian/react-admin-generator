export const dropDownHandler = (filterChangeHandler, name, valueKey = 'value') => val => filterChangeHandler(name, val[valueKey] === 'none' ? undefined : val[valueKey])
export const textHandler = (filterChangeHandler, name) => (pros, value) => filterChangeHandler(name, value.toString())
export const rangeHandler = (filterChangeHandler, name) => ({ min, max }) => {
  filterChangeHandler(`${name}From`, min, false)
  filterChangeHandler(`${name}To`, max)
}
export const dateHandler = (filterChangeHandler, name) => (pros, { endDate, startDate }) => {
  filterChangeHandler(`${name}From`, startDate && startDate.toISOString(), false)
  filterChangeHandler(`${name}To`, endDate && endDate.toISOString())
}
export const multiSelectHandler = (filterChangeHandler, name, id) => (pros, values) => filterChangeHandler(name, values.map(val => val[id]))

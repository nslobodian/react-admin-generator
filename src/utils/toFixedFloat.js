export const toFixedFloat = (num, fixed = 2) => {
  if (num) {
    const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?')
    return parseFloat(num.toString().match(re)[0])
  } else {
    return 0
  }
}

/* eslint-disable consistent-return */
const isEmpty = value =>
  value === undefined || value === null || value === '' || value === false
const join = rules => (value, data) =>
  rules
    .map(rule => rule(value, data))
    .filter(error => !!error)[0 /* first error */]

export function required(value) {
  if (isEmpty(value)) {
    return 'Required'
  }
}

export function minLength(min) {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`
    }
  }
}

export function maxLength(max) {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`
    }
  }
}

export function createValidator(rules) {
  return (data = {}) => {
    const errors = {}
    Object.keys(rules).forEach(key => {
      const rule = join([].concat(rules[key])) // concat enables both functions and arrays of functions
      const error = rule(data[key], data)
      if (error) {
        errors[key] = error
      }
    })
    return errors
  }
}

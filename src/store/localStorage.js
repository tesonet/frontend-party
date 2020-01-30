import {name} from '../../package.json'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(`${name}.state`)

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(`${name}.state`, serializedState)
  } catch (error) {
    // log
  }
}

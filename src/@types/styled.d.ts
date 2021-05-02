// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultColors {
    grey: string
    purple: string
    lightGrey: string
    white: string
    borderGrey: string
    selectorGrey: string
  }
  export interface DefaultTheme {
    colors: DefaultColors
  }
}

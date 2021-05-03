// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultColors {
    limeade: string
    dustyGray: string
    atlantis: string
    textGray: string
    backgroundGray: string
    white: string
    logoColor: string
    overlayColor: string
  }
  export interface DefaultTheme {
    colors: DefaultColors
  }
}

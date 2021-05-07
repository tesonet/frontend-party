import 'styled-components'

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
    borderColor: string
    pinkGlamour: string
    iconGray: string
  }
  export interface DefaultTheme {
    colors: DefaultColors
  }
}

import { createUseStyles } from 'react-jss'
interface ColorScheme {
  main: string
  hover: string
  disabled: string
}
export const createButtonStyle = (colorScheme: ColorScheme) =>
  createUseStyles({
    button: {
      width: '100%',
      '& button': {
        width: '100%',
        border: 'none',
        padding: '18px 0',
        borderRadius: 5,
        backgroundColor: colorScheme.main,
        color: 'white',
        transition: 'background-color 0.2s ease-in',
        '&:hover': {
          backgroundColor: colorScheme.hover,
          cursor: 'pointer',
        },
        '&:disabled': {
          backgroundColor: colorScheme.disabled,
          pointerEvents: 'none',
        },
      },
    },
  })

export const successButton = createButtonStyle({
  main: '#83D605',
  hover: '#86b300',
  disabled: '#AFE45D',
})

export const warningButton = createButtonStyle({
  main: '#FFC107',
  hover: '#E0A800',
  disabled: '#FFD75F',
})

export const primaryButton = createButtonStyle({
  main: '#007BFF',
  hover: '#0069D9',
  disabled: '#5AAAFF',
})

import { createUseStyles } from "react-jss";
import styleConsts from '../../../styles'

export default createUseStyles({
    inputContainer: {
      position: 'relative',
      display: 'flex',
  
      '& .input': {
        width: '100%',
        padding: '18px 50px',
        border: '2px solid transparent',
        borderRadius: 5,
        color: styleConsts.mainTextColor,
        transition: 'border 0.2s ease-in-out',
  
        '&:focus': {
          outline: 'none',
        },
        '&.required': {
          border: '2px solid red',
        },
      },
      '& .icon': {
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        left: 25,
      },
      '& small': {
        color: 'red',
        position: 'absolute',
        bottom: -18,
        left: 0,
      },
    },
  })
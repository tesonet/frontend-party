import { createUseStyles } from "react-jss";

export default createUseStyles({
    logoutContainer: {
      display: 'flex',
      alignItems: 'center',
      '& .btn': {
        border: 'none',
        backgroundColor: 'transparent',
      },
      '& .icon': {
        display: 'flex',
      },
      '&:hover .icon': {
        cursor: 'pointer',
        '& svg path': {
          fill: '#99cc33',
        },
      },
      '&:hover .btn': {
        color: '#99cc33',
        cursor: 'pointer',
      },
    },
    fillWhite: {
      '& svg path': {
        fill: '#fff',
      },
    },
  })
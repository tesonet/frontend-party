import { createUseStyles } from "react-jss";
import styleConsts from '../../styles'

export default createUseStyles({
    app: {
      height: '100vh',
      position: 'relative',
      fontFamily: "'Roboto', sans-serif",
      fontSize: styleConsts.fontSize,
      '& *': {
        boxSizing: 'border-box',
      },
      '& .mb': {
        marginBottom: styleConsts.marginBottom,
      },
      '& .mr': {
        marginRight: styleConsts.marginRight,
      },
    },
  })
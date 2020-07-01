import { createUseStyles } from 'react-jss'

export default createUseStyles({
  nav: {
    padding: '46px 0',
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& li': {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 300,
      color: '#666666',
      padding: '24px 0',
      borderBottom: '1px solid #E7E7E7',
    },
  },
  logo: {
    '& img': {
      height: 28,
    },
  },
  header: {
    fontSize: 14,
    color: '#999999',
    backgroundColor: '#F5F5F5',
    padding: '25px 0',
    borderBottom: '1px solid #E7E7E7',
    borderTop: '1px solid #E7E7E7',
    '& .sortable': {
      cursor: 'pointer',
    },
    '& .underline': {
      textDecoration: 'underline',
    },
    '& .sortContainer': {
      position: 'relative',
      '& .sortNameContainer': {
        display: 'flex',
        '& .arrow': {
          cursor: 'pointer',

          '& svg': {
            height: 16,
            width: 16,
          },
        },
      },
      '& .currentSort': {
        position: 'absolute',
        top: -16,
        left: 0,
        width: 80,
      },
    },
  },
})

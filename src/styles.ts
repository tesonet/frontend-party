export default {
  animation: {
    duration: {
      m: '.3s',
    },
  },
  borderRadius: {
    m: '5px',
  },
  colors: {
    darkBlue: '#2f3254',
    darkRed: '#721c24',
    gray1: '#f5f5f5',
    gray2: '#e6e6e6',
    gray3: '#ccc',
    gray5: '#999',
    gray6: '#666',
    lightRed: '#f8d7da',
    primary: '#9fd533',
    primaryDarker: '#86b300',
    white: '#ffffff',
  },
  fontSize: {
    m: '16px',
    s: '14px',
  },
  spacing: (times: number, plus: number = 0) => `${5 * times + plus}px`,
};

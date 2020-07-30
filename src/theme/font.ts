type Font = {
  fontWeights: {
    lighter: string;
    normal: string;
    bold: string;
  };
  fontSizes: { [key: string]: string };
  fonts: { [key: string]: string };
};

export const font: Font = {
  fontSizes: {
    small: '1.4rem',
    normal: '1.6rem',
  },
  fontWeights: {
    lighter: '300',
    normal: 'normal',
    bold: 'bold',
  },
  fonts: {
    family: 'Roboto, sans-serif',
  },
};

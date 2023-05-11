import { ThemeProvider } from 'styled-components';
import React from 'react';

const theme = {
  colors: {
    brand: {
        primary: '#F6F6F6',
        secondary: '#F1E9E2',
        tertiary: '#FF0000',
        gpurp: '#4200FF'
    },
    text: {
        black: '#000000',
        grey: '#BBBBBB',
        white: '#ffffff',
        gpurp: '#AA61FF'
    },
    psuedo: {
        hover: '#1C1C1C',
    },
    nuetral: {
        bgGrey: '#f6f6f6',
        borderGrey: '#2E2E2E'
    },
    alerts: {
      success: {
        background: '#486C2C',
        text: '#ffffff',
      },
      error: {
        background: '#9D1212',
        text: '#ffffff',
      },
      info: {
        background: '#094364',
        text: '#ffffff',
      },
      warning: {
        background: '#EB672E',
        text: '#ffffff',
      },
      nuetral: {
        background: `#F6F6F6`,
        text: '#f5f5f5',
      },
    },
  },
  fontSizes: {
    psm: '12px',
    p: '14px',
    h5: '18px',
    h4: '20px',
    h3: '30px',
    h2: '60px',
    h1: '79px',
  },
  fontWeights: {
    buttons: {
      base: '500,',
    },
    text: {     
      psm: '400',
      p: '400',
      h5: '700',
      h4: '700',
      h3: '700',
      h2: '700',
      h1: '700',
    }
  },
  letterSpacing: {
    psmall: '0px',
    p: '0px',
    h5: '-0.015em',
    h4: '-0.015em',
    h3: '-0.015em',
    h2: '-0.035em',
    h1: '-0.035em',
  },
  lineHeight: {
    psmall: '1',
    p: '1.6',
    h5: '1.8',
    h4: '1.6',
    h3: '1.3',
    h2: '1.25',
    h1: '1.09',
  },
  heights: {
    input: '50px',
  },
  borderRadius: {
    base: '5px',
    xs: '1px',
    sm: '3px',
    md: '12px',
    lg: '16px',
    xl: '25px',
  },
  breakPoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    xxl: '1400px'
  },
  container: {
    width: {
      xs: '560px',
      sm: '650px',
      smd: '800px',
      md: '1165px',
      lg: '1400px',
      xl: '1880px',
      fullvw: '100vw',
    },
    padding: {
      nav: '0px 30px 0px 30px',
      xs: '110px 30px 160px 30px',
      sm: '110px 30px 160px 30px',
      smd: '110px 30px 160px 30px',
      md: '110px 30px 160px 30px',
      lg: '110px 30px 160px 30px',
      xl: '110px 30px 160px 30px',
      fullvw: '110px 0px 160px 0px',
    },
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
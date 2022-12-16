import React from 'react'
import {ThemeProvider,CssBaseline,createTheme} from '@mui/material'

import Poppins from '../fonts/Poppins-Medium.ttf';






export const ThemeProviderComp = ({children,darkMode}) => {


 const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Poppins'), local('Poppins-Regular'), url(${Poppins}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
    palette:{
      mode:darkMode?'dark':'light'
    }
  });


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

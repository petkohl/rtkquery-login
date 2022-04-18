import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    overrides: {
      MuiFilledInput: {
        root: {
          borderTopLeftRadius: number;
          borderTopRightRadius: number;
        };
        adornedEnd: {
          paddingRight: number;
        };
      };
    };
    props: {};
  }
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // background: {
    //   default: '#d2f9ef',
    // },
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#e8eaf6',
    },
    error: {
      main: '#ff8c8c',
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 600,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },

  overrides: {
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
      adornedEnd: {
        paddingRight: 4,
      },
    },
  },

  props: {},
});
//console.log(lightTheme);
export default lightTheme;

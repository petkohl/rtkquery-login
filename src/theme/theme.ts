import { adaptV4Theme, createTheme } from '@mui/material/styles';

const lightTheme = createTheme(
  adaptV4Theme({
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
        // most basic recommended timing
        standard: 600,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
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
  })
);
// console.log(lightTheme);
export default lightTheme;

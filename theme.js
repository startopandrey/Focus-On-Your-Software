import { createTheme } from "@mui/material";
// import PoppinsLight from "./public/fonts/poppins/Poppins-Light.ttf";
import {Poppins} from "@next/font/google" 
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-opensans",
});
export const theme = createTheme({
  typography: {
    fontFamily: [
      // "Roboto",
      // '"Helvetica Neue"',
      // "Arial",
      // "sans-serif",
      poppins.style.fontFamily,
      "sans-serif",
    ].join(","),
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: `
    //   @font-face {
    //     fontFamily: 'Poppins',
    //     fontStyle: 'light',
    //     fontDisplay: 'swap',
    //     fontWeight: '400',
    //     src: 
    //       local('Poppins'),
    //       local('Poppins-Light'),
    //       url(${PoppinsLight}) format('ttf')
    //     ,
    //     unicodeRange:
    //       'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
    //    }
    // `,
    // },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          fontWeight: 600,
          padding: "13px 30px",

          ...(ownerState.size === "small" && { padding: "10px 20px" }),

          ...(ownerState.variant === "outlined" &&
            ownerState.color === "dark" && {
              color: "",
              borderColor: "#edebfd",
            }),
        }),
      },
    },
  },
  palette: {
    primary: {
      main: "#023fda",
    },
    secondary: {
      main: "#edf2ff",
    },
    dark: {
      main: "#000",
    },
  },
});

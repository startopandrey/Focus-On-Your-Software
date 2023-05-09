import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: [
      // "Roboto",
      // '"Helvetica Neue"',
      // "Arial",
      "sans-serif",

      '"Poppins"',
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: "uppercase",
          fontWeight: 700,
          padding: "13px 30px",
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "primary" && {
          
            }),
        }),
      },
    },
  },
  palette: {
    primary: {
      main: '#0049ff',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

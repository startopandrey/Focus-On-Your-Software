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
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'primary' && {
            textTransform: "uppercase !important",
            letterSpacing: "2px"
            }),
        }),
      },
    },
  },
});

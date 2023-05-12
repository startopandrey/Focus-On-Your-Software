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
 
          whiteSpace: "nowrap",
          fontWeight: 700,
          padding: "13px 30px",
          ...(ownerState.size === "small" &&
          {     padding: "10px 20px",}),

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
      main: "#0049ff",
    },
    secondary: {
      main: "#edf2ff",
    },
    dark: {
      main: "#000",
    },
  },
});

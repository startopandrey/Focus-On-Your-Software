import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout/Layout";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { theme } from "../theme";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline></CssBaseline>

        <Component {...pageProps} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

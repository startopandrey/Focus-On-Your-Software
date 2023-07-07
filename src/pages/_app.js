import "../styles/globals.scss";
// import  localFont  from "@next/font/local";
import { theme } from "../../theme";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import nextI18nextConfig from "../../next-i18next.config";
import { appWithTranslation } from "next-i18next";
import {Poppins} from "@next/font/google"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-opensans",
});
// const poppins = localFont({
//   src: [
//     {
//       path: "../../public/fonts/poppins/Poppins-Light.ttf",
//       weight: "400",
//       display: "swap",
//       variable: "--font-poppins",
//     },
//     {
//       path: "../../public/fonts/poppins/Poppins-Regular.ttf",
//       weight: "500",
//       display: "swap",
//       variable: "--font-poppins",
//     },
//     {
//       path: "../../public/fonts/poppins/Poppins-Medium.ttf",
//       weight: "600",
//       display: "swap",
//       variable: "--font-poppins",
//     },
//     {
//       path: "../../public/fonts/poppins/Poppins-SemiBold.ttf",
//       weight: "700",
//       display: "swap",
//       variable: "--font-poppins",
//     },
//     {
//       path: "../../public/fonts/poppins/Poppins-Bold.ttf",
//       weight: "800",
//       display: "swap",
//       variable: "--font-poppins",
//     },
//   ],
// });
const App = ({ Component, pageProps })=> {
  return (
    <main className={poppins.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
export default appWithTranslation(App, nextI18nextConfig)

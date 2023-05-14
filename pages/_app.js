import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout/Layout";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { theme } from "../theme";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="loading__container">
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: "-100%", opacity: 0 }}
        transition={{
          delay: 1,
          ease: "anticipate",
          duration: 0.75,
        }}
      >
        <div className="loading__wrapper">
          <div className={"common_logo"} onClick={() => router.push("/")}>
            <Image
              alt="logo"
              height={"100"}
              width={"200"}
              src="/foys_logo.png"
            ></Image>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
const LoadingMain = () => {

  return (
    <div className="loading__container">
      <motion.div
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: "-100%", opacity: 1 }}
        transition={{
          delay: 5,
          ease: "anticipate",
          duration: 0.75,
        }}
      >
        <div className="loading__wrapper">
          <video
            ref={vidRef}
            autoPlay={true}
            playsinline
            muted
            controls=""
            className="logo_animation"
            width={"100vw"}
            height={"100vh"}
          >
            <source src="/logo-animation.mp4" type="video/mp4"></source>
          </video>
        </div>
      </motion.div>
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [mainAnimation, setMainAnimation] = useState(false);

  const [loadingCommon, setLoadingCommon] = useState(false);
  const handleStart = (url) => {
    setLoadingCommon(true);
  };
  const handleComplete = (url) => {
    setTimeout(() => {
      setLoadingCommon(false);
    }, 1300);
  };
  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  const handleWindowClose = () => {
    sessionStorage.removeItem("mainAnimation");
  };
  useEffect(() => {
    // sessionStorage.setItem("mainAnimation", true);
    if (!sessionStorage.getItem("mainAnimation")) {
      setMainAnimation(true);

      setTimeout(() => {
        setMainAnimation(false);
        sessionStorage.setItem("mainAnimation", true);
      }, 5500);
    }

    window.addEventListener("unload", handleWindowClose);
    return () => {
      window.removeEventListener("unload", handleWindowClose);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {" "}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline></CssBaseline>

        {/* {mainAnimation ? ( */}x
        <video
        ref={vidRef}
          muted={true}
          autoPlay={true}
          playsInline={true}

          className="logo_animation"
          width={"300px"}
          height={"300px"}
        >
          <source src="/logo-animation.mp4" type="video/mp4"></source>
          <source src="movie.ogg" type="video/ogg"></source>
        </video>
        {/* ) : (
          loadingCommon ? <Loading></Loading> : <Component {...pageProps} />
        )}  */}
        {/* <Component {...pageProps}></Component> */}
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

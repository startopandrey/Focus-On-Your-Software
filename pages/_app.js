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
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
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
const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};
// const LoadingMain = () => {
//   // const vidRef = useRef();

//   // useEffect(() => {
//   //   vidRef.current.play();
//   // }, []);
//   const videoParentRef = useRef();
//   const [shouldUseImage, setShouldUseImage] = useState(false);
//   useEffect(() => {
//     // check if user agent is safari and we have the ref to the container <div />
//     if (isSafari() && videoParentRef.current) {
//       // obtain reference to the video element
//       const player = videoParentRef.current.children[0];

//       // if the reference to video player has been obtained
//       if (player) {
//         // set the video attributes using javascript as per the
//         // webkit Policy
//         player.controls = false;
//         player.playsinline = true;
//         player.muted = true;
//         player.setAttribute("muted", ""); // leave no stones unturned :)
//         player.autoplay = true;

//         // Let's wait for an event loop tick and be async.
//         setTimeout(() => {
//           // player.play() might return a promise but it's not guaranteed crossbrowser.
//           const promise = player.play();
//           // let's play safe to ensure that if we do have a promise
//           if (promise.then) {
//             promise
//               .then(() => {})
//               .catch(() => {
//                 // if promise fails, hide the video and fallback to <img> tag
//                 videoParentRef.current.style.display = "none";
//                 setShouldUseImage(true);
//               });
//           }
//         }, 0);
//       }
//     }
//   }, []);

//   const AutoPlayVideo = () =>
//     shouldUseImage ? (
//       <div className="loading__wrapper">
//         <img
//           src="logo-animation.mp4"
//           className="logo_animation_video"
//           alt="Muted Video"
//         />
//       </div>
//     ) : (
//       <div
//         className="loading__wrapper"
//         ref={videoParentRef}
//         dangerouslySetInnerHTML={{
//           __html: ` <video

//         muted
//         autoplay
//         playsinline
//         preload="metadata"
//             className="logo_animation_video"
//           >
//             <source src="logo-animation.mp4" type="video/mp4"></source>
//           </video>`,
//         }}
//       ></div>
//     );
//   return (
//     <div className="loading__container">
//       <motion.div
//         initial={{ x: 0, opacity: 1 }}
//         animate={{ x: "-100%", opacity: 1 }}
//         transition={{
//           delay: 6,
//           ease: "anticipate",
//           duration: 0.75,
//         }}
//       >
//         <AutoPlayVideo></AutoPlayVideo>
//       </motion.div>
//     </div>
//   );
// };

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [mainAnimation, setMainAnimation] = useState(false);

  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const handleStart = (url) => {
    setLoadingAnimation(true);
  };
  const handleComplete = (url) => {
    setTimeout(() => {
      setLoadingAnimation(false);
    }, 1200);
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
      }, 1300);
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
        {mainAnimation && <Loading></Loading>}
        {loadingAnimation && <Loading></Loading>}
        {/* {mainAnimation ? (

        ) : loadingAnimation ? (
          <Loading></Loading>
        ) : (
          <Component {...pageProps} />
        )} */}{" "}
        <GoogleAnalytics measurementId="G-B0X0RC2NZR" />
        <Component
          mainAnimation={mainAnimation}
          loadingAnimation={loadingAnimation}
          {...pageProps}
        ></Component>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

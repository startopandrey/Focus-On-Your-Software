import { Box, Container } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useTranslation } from "next-i18next";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
const Compare = () => {
  const { t: translate } = useTranslation("home");

  const handlePositionChange = useCallback(
    (position) => console.log("[CustomHandle]", position),
    []
  );
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section className="compare">
      {" "}
      <Container>
        <div className="compare_container">
          <Box className="header">
            <h3>{translate("home.compare.header.title")}</h3>
            <h1>{translate("home.compare.header.description")}</h1>
          </Box>
          <motion.div
            ref={ref}
            variants={{
              visible: {
                opacity: 1,
                y: 1,
                transition: { duration: 0.5, delay: 0.2 },
              },
              hidden: { opacity: 0, y: 20 },
            }}
            animate={controls}
            initial="hidden"
          >
            <ReactCompareSlider
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    backdropFilter: undefined,
                    background: "white",
                    border: 0,
                    color: "#333",
                  }}
                />
              }
              itemOne={
                <Image
                  src="/before.png"
                  width={1152}
                  height={776}
                  style={{}}
                  alt="website before"
                />
              }
              itemTwo={<Image        width={1152}
              height={776} src="/after.png" alt="website after" />}
              onPositionChange={handlePositionChange}
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                //   ...style,
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Compare;

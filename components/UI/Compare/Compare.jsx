import { Box, Container } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useTranslation } from "next-i18next";
import { useAnimation, motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
const Compare = () => {
  const { t: translate } = useTranslation("home");

  const handlePositionChange = useCallback(
    (position) => console.log("[CustomHandle]", position),
    []
  );  const [ref, inView] = useInView();
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
            <h3>Compare Our Work</h3>
            <h1>Before & After</h1>
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
                <ReactCompareSliderImage
                  src="/before.png"
                  style={{ }}
                  alt="one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="/after.png"
                  alt="two"
                />
              }
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

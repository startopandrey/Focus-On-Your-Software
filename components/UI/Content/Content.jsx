import { Container } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Content = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="content">
      <Container>
        <div className="content_container">
          <div className="header">
            <h1>We build software that gives you complete control.</h1>
            <p>
              Connect or build a new platform with all of your product
              information and workflows. This central platform has all the
              tools, workflows, and processes you need.
            </p>
          </div>
          <motion.div
            ref={ref}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay:  0.4 },
              },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            animate={controls}
            initial="hidden"
            className="content_banner"
          >
            <Image alt="foys_banner" src="/foys_banner.png" width={2000} height={1000}></Image>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Content;

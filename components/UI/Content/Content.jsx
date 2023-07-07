import { Container } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "next-i18next";
const Content = () => {
  const { t: translate } = useTranslation("home");
  const { t: translateCommon } = useTranslation("common");

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
            <h1>{translate("home.content.header.title")}</h1>
            <p>{translate("home.content.header.description")}</p>
          </div>
          <motion.div
            ref={ref}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.4 },
              },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            animate={controls}
            initial="hidden"
            className="content_banner"
          >
            <Image
              alt="foys_banner"
              src="/foys_banner.png"
              width={800}
              height={400}
            ></Image>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Content;

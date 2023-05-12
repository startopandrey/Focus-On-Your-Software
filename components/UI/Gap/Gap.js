import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { motion , useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
const clientsList = [
  { img: "https://www.warketolog.com/clients/Sharikava.svg" },
  { img: "https://www.warketolog.com/clients/BSK.svg" },
  { img: "https://www.warketolog.com/clients/Brita.svg" },
  { img: "https://www.warketolog.com/clients/SkinMelanin.svg" },
];

const Gap = () => {
  const { t: translate } = useTranslation("home");
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="gap">
      <Container className="gap_container">
        <div className="gap_image">
          <Image alt="demo admin" width={1000} height={500} src="/demoAdmin.png"></Image>
        </div>
        <div>
          <h3 className="gap__title">{translate("home.gap.title")}</h3>
          <p className="gap_description">{translate("home.gap.description")}</p>
          <ul className="clients">
            {clientsList.map((el, i) => (
              <motion.li
                ref={ref}
                variants={{
                  visible: { opacity: 1, y: 0,  transition: { duration: 0.5, delay: i/5 + 0.1 } },
                  hidden: { opacity: 0, y: -20},
                }}
                animate={controls}
                initial="hidden"
                key={i}
                style={{ cursor: "pointer" }}
                className="client_item"
              >
                <Link href="https://sharikava.com/">
                  <Image
                    className="client_img"
                    height={100}
                    width={150}
                    src={el.img}
                    alt=""
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Gap;

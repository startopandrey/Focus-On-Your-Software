import { Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Typed from "react-typed";
import json2mq from "json2mq";
import styles from "../../../src/styles/customer-support.module.scss"
const CustomerSupport = () => {
  const matchesMedium = useMediaQuery(
    json2mq({
      minWidth: 992,
    })
  );
  const colors = [
    ["#ffb501", "#fe4582"],
    ["#179EFF", "#FF22DC"],
    ["#D25BF4", "#1FF0FC"],
    ["#D0D501", "#0CD65F"],
  ];
  const [boxShadowColor, setBoxShadowColor] = useState(colors[0]);
  return (
    <section className={styles.csupport}>
      {" "}
      {matchesMedium && (
        <div
          style={{
            background: `url(/solution/customer_support.png) 10% 50%`,
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}
          className={styles.backgound_image}
        ></div>
      )}
      <Container>
        <div className={styles.csupport_content}>
          <h3 className={styles.csupport_title}>The perfect company for beginners.</h3>
          <div className={styles.csupport_subtitle}>
            <p>
              Technical support and training via<br></br>
              <Typed
                strings={["Zoom", "Google Meets", "Whatsapp", "Skipe"]}
                typeSpeed={120}
                preStringTyped={(i) => {
                  setBoxShadowColor(colors[i]);
                }}
                backSpeed={80}
                style={{
                  background: `-webkit-linear-gradient(90deg, ${boxShadowColor[0]} 0%,  ${boxShadowColor[1]} 100%)`,
                }}
                backDelay={1000}
                loop
              />
            </p>{" "}
          </div>
          <div className={styles.csupport_review}>
            <div className={styles.csupport_review_author}>
              <div className={styles.csupport_review_ava}>
                <Image
                  width={100}
                  height={100}
                  src={"/solution/website/memodji.png"}
                ></Image>
              </div>
              <h3>Rikert Weimann</h3>
            </div>
            <p>
              <strong>"</strong>The only company in the world where you can buy
              a website for such a price, launch it, and then torture technical
              support 7 days a week. If you are unfamiliar with this, they will
              help you, prompt you, and teach you.<strong>"</strong>
            </p>
          </div>
        </div>
      </Container>
      {!matchesMedium && (
        <div
          style={{
            background: `url(/solution/customer_support_mobile.png) center 0 no-repeat`,
            backgroundSize: "cover",
       
          }}
          className={styles.backgound_image}
        ></div>
      )}
    </section>
  );
};

export default CustomerSupport;

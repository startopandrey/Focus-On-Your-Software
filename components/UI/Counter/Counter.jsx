import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next"
const Counter = () => {
  const { t: translate } = useTranslation("home");
  const { t: translateCommon } = useTranslation("common");

  const counterBlocks = [
    {
      image: "/icons/happy_clients.svg",
      number: "50+",
      title: translate("home.counter.block1.text"),
    },
    {
      image: "/icons/apps.svg",
      number: "7+",
      title: translate("home.counter.block2.text"),
    },
    {
      image: "/icons/awards.svg",
      number: "5+",
      title: translate("home.counter.block3.text"),
    },
    {
      image: "/icons/members.svg",
      number: "5+",
      title: translate("home.counter.block4.text"),
    },
  ];
  return (
    <div className="counter">
      <Container sx={{ position: "relative" }}>
        <div className="counter_container ">
          <div className="success_container">
            {counterBlocks.map((el) => (
              <div key={el.title} className="success_item">
                <div className="success_icon">
                  <Image
                    style={{
                      full: "white",
                      color: "#fff",
                    }}
                    width="55"
                    height={"55"}
                    src={el.image}
                    alt="success icon"
                  ></Image>
                </div>{" "}
                <h1>{el.number}</h1>
                <p>{el.title}</p>
              </div>
            ))}
          </div>
          <div className="white_circle">
            <Image alt="Bg white circle" width={20} height={20} src="/white_circle.png"></Image>
          </div>
        </div>
      </Container>
      <div className="bg_yellow"></div>
    </div>
  );
};

export default Counter;

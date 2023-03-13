import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const clientsList = [
  { img: "https://www.warketolog.com/clients/Sharikava.svg" },
  { img: "https://www.warketolog.com/clients/BSK.svg" },
  { img: "https://www.warketolog.com/clients/Brita.svg" },
  { img: "https://www.warketolog.com/clients/SkinMelanin.svg" },
  { img: "https://www.warketolog.com/clients/Liga.svg" },
  ,
  { img: "https://www.warketolog.com/clients/Linkos.svg" },
  { img: "https://www.warketolog.com/clients/24print.svg" },
  {
    img: "https://static.tildacdn.com/tild6264-3138-4337-b435-336364663938/Rich.jpg",
  },
];
const Gap = () => {
  const { t: translate } = useTranslation("home");
  return (
    <section className="gap">
      <Container className="gap_container">
        <h3 className="gap__title">
        {translate("home.gap.title")}
        </h3>
        <p className="gap_description">
        {translate("home.gap.description")}
        </p>
        <ul className="clients">
          {clientsList.map((el, i) => (
            <li key={i} className="client_item">
              <Image className="client_img" src={el.img} alt="" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Gap;

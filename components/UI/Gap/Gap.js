import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
const clientsList = [
  { img: "https://www.warketolog.com/clients/Sharikava.svg" },
  { img: "https://www.warketolog.com/clients/BSK.svg" },
  { img: "https://www.warketolog.com/clients/Brita.svg" },
  { img: "https://www.warketolog.com/clients/SkinMelanin.svg" },
];
const Gap = () => {
  const { t: translate } = useTranslation("home");
  return (
    <section className="gap">
      <Container className="gap_container">
        <div className="gap_image">
          <Image width={1000} height={500} src="/demoAdmin.png"></Image>
        </div>
        <div>
          <h3 className="gap__title">{translate("home.gap.title")}</h3>
          <p className="gap_description">{translate("home.gap.description")}</p>
          <ul className="clients">
            {clientsList.map((el, i) => (
              <li key={i} className="client_item">
                <Image
                  className="client_img"
                  height={100}
                  width={150}
                  src={el.img}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Gap;

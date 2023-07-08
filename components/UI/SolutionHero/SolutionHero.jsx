import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Image from "next/image";
import { Container } from "@mui/material";
import Typed from "react-typed";

import AliceCarousel from "react-alice-carousel";
import styles from "../../../src/styles/solution-hero.module.scss";
import QuestionForm from "../QuestionForm/QuestionForm";
const SolutionHero = ({
  sliderBlocks,
  onClickLastQuestion,
  setQuestionsForm,
  questionsForm,
  title,
  typedWords,
  description,
  formTitle,
  type,
}) => {
  const colors = [
    ["#ffb501", "#fe4582"],
    ["#179EFF", "#FF22DC"],
    ["#D25BF4", "#1FF0FC"],
    ["#D0D501", "#0CD65F"],
  ];
  const [boxShadowColor, setBoxShadowColor] = useState(colors[0]);

  return (
    <section className={styles.solution_hero_container}>
      <Container
        className={styles.solution_container}
        sx={{ position: "relative", zIndex: 10 }}
      >
        {" "}
        <div className={styles.solution_hero_content}>
          <div className={styles.solution_hero}>
            <div className={styles.hero_header}>
              <h1 className={styles.hero_header_title}>
                {title} <br></br>
                <Typed
                  strings={typedWords.map((el) => el.word)}
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
              </h1>
              <p>{description}</p>
            </div>
            <div className={styles.hero_question_form_container}>
              <QuestionForm
              onClickLastQuestion={onClickLastQuestion}
                setQuestionsForm={setQuestionsForm}
                questionsForm={questionsForm}
              ></QuestionForm>
            </div>
          </div>{" "}
          <div className={styles.hero__img}>
            <span
              style={{
                background: `linear-gradient(90deg, ${boxShadowColor[0]} 0%,  ${boxShadowColor[1]} 100%)`,
              }}
              className={styles.circle_shadow}
            ></span>
            <Image
              width={500}
              height={500}
              src={`/solution/${type}/${type}_hero.png`}
              alt={`${type} banner`}
            ></Image>
          </div>
        </div>{" "}
        <div className={styles.solution_hero_slider}>
          <AliceCarousel
            duration={400}
            autoPlay={true}
            startIndex={1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={true}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              1024: {
                items: 1,
              },
            }}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
            
            // onSlideChange={() => {}}
            // onSlideChanged={() => {}}
          >
            {sliderBlocks.map((el) => (
              <div key={el.title} className={styles.alice_item}>
                <div className={styles.background_image}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"20%"}
                    alt={`${type} image`}
                    src={`/solution/${type}/${el.img}`}
                  ></Image>
                </div>
                <div className={styles.alice_item_content}>
                  {" "}
                  <h1>{el.title}</h1>
                  <p>{el.text}</p>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </Container>
    </section>
  );
};

export default SolutionHero;

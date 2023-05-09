import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const Counter = () => {
  const counterBlocks = [
    {
      image: "/icons/happy_clients.svg",
      number: "50+",
      title: "Happy Clients",
    },
    {
      image: "/icons/apps.svg",
      number: "10+",
      title: "Apps Developed",
    },
    {
      image: "/icons/awards.svg",
      number: "5+",
      title: "Awards Winning",
    },
    {
      image: "/icons/members.svg",
      number: "10+",
      title: "Team Members",
    },
  ];
  return (
    <div className="counter">
      <Container sx={{ position: "relative" }}>
        <div className="counter_container ">
          <div className="success_container">
            {counterBlocks.map((el) => (
              <div className="success_item">
                <div className="success_icon">
                  <Image
                    style={{
                      full: "white",
                      color: "#fff",
                    }}
                    width="55"
                    height={"55"}
                    src={el.image}
                  ></Image>
                </div>{" "}
                <h1>{el.number}</h1>
                <p>{el.title}</p>
              </div>
            ))}
          </div>
          <div className="white_circle">
            <Image width={20} height={20} src="/white_circle.png"></Image>
          </div>
        </div>
      </Container>
      <div className="bg_yellow"></div>
    </div>
  );
};

export default Counter;

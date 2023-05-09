import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <div className="content">
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
          <div className="content_banner">
            <Image src="/foys_banner.png" width={2000} height={1000}></Image>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Content;

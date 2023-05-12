import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const [serviceBlocks, setServiceBlocks] = useState([
    {
      image: "/managment.jpg",
      title: "Data Managment (DMS)",
      description: "Private School DMS",
      active: true,
      id: 1,
    },
    {
      image: "/employee_managment.png",
      title: "Employee Managment",
      description: "Realtor Setup",
      active: false,
      id: 2,
    },
    {
      image: "/ecommerce.png",
      title: "Ecommerce Admin",
      description: "Clothes Shop",
      active: false,
      id: 3,
    },
    {
      image: "/track.jpg",
      title: "Client Support",
      description: "Education CSS",
      active: false,
      id: 4,
    },
  ]);
  const activeImage = serviceBlocks.find((el) => el.active == true);
  console.log(activeImage);

  return (
    <div className="services">
      <Container>
        <div className="services_container">
          <div className="header">
            <h3 className="">Our Special Solutions</h3>
            <h1>We can customize your business with the power of IT.</h1>
          </div>
          <motion.div
            ref={ref}
            variants={{
              visible: {
                opacity: 1,
                y: 1,
                transition: { duration: 0.5, delay: 0.2 },
              },
              hidden: { opacity: 0, y: 20 },
            }}
            animate={controls}
            initial="hidden"
            className="services_tabs_container"
          >
            <Grid container gap={4}>
              <Grid lg={4} sm="12" md={4} className="services_tabs" item>
                {serviceBlocks.map((el) => (
                  <div
                  key={el.id}
                    onClick={() => {
                      const newState = serviceBlocks.map((obj) =>
                        obj.id === el.id
                          ? { ...obj, active: true }
                          : { ...obj, active: false }
                      );
                      setServiceBlocks(newState);
                    }}
                    className={`services_tab ${el.active ? "active" : ""}`}
                  >
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                  </div>
                ))}
              </Grid>
              <Grid lg={7} md="7" sm="12" item>
                <motion.div
                key={activeImage.image}
                  animate={{
                    opacity: 1,
                    y: 1,
                    transition: { duration: 0.5 },
                  }}
                  initial={{
                    opacity: 0,
                   
                  }}
                  className="services_image"
                >
                  <Image
                    width={1920}
                    height={1440}
                    alt="Service Image"
                    src={activeImage.image}
                  ></Image>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Services;

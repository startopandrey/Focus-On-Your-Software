import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Services = () => {
  const [serviceBlocks, setServiceBlocks] = useState([
    {
      image: "/managment.jpg",
      title: "Data Managment (DMS)",
      description: "Private School DMS",
      active: true,
      id: 1
    },
    {
      image: "/employee_managment.png",
      title: "Employee Managment",
      description: "Realtor Setup",
      active: false,
      id: 2
    },
    {
      image: "/ecommerce.png",
      title: "Ecommerce Admin",
      description: "Clothes Shop",
      active: false,
      id: 3
    },
    {
      image: "/track.jpg",
      title: "Client Support",
      description: "Education CSS",
      active: false,
      id: 4
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
          <div className="services_tabs_container">
            <Grid container gap={4}>
              <Grid xs={4} className="services_tabs" item>
                {serviceBlocks.map((el) => (
                  <div
                    onClick={() =>  {
                        const newState = serviceBlocks.map(obj =>
                            obj.id === el.id ? { ...obj, active: true } : {...obj,active: false});
                        setServiceBlocks(newState)
                    }}
                    className={`services_tab ${el.active ? "active" : ""}`}
                  >
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                  </div>
                ))}
              </Grid>
              <Grid xs={7} item>
                <div className="services_image">
                  <Image width={1920} height={1440} src={activeImage.image}></Image>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;

import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "next/head";
import Script from "next/script";

const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/logo_small.png" />
        <title>FOYS.</title>

       
      </Head>
      <Header />
      <div style={{ overflowX: "hidden" }}>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;

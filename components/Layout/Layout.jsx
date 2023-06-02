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
        <title>IT Company | Foys.</title>
        <meta
          name="description"
          content="Create your awesome website to increase sales."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          property="og:title"
          content="Create your awesome website to increase sales."
        />
      </Head>
      <Header />
      <div style={{ overflowX: "hidden" }}>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;

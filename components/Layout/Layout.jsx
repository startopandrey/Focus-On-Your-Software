import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/logo_small.png" />
        <title>FOYS.</title>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B0X0RC2NZR"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-B0X0RC2NZR');
        </script>
      </Head>
      <Header />
      <div style={{ overflowX: "hidden" }}>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;

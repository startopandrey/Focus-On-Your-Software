import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Head from 'next/head'

const Layout = (props) => {
  return (
    <Fragment>
       <Head>
      <link rel="shortcut icon" href="/logo_small.png" />
    </Head>
      <Header />
      <div>{props.children}</div>
      <Footer/>
    </Fragment>
  );
};

export default Layout;

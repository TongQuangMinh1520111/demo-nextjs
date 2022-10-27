/* eslint-disable @next/next/no-img-element */
import styles from "./layout.module.css";
import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
// import Image from "next/image";
// import Link from "next/link";

export const siteTitle = "Next.js - Wordpress Demo Website";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

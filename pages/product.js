/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import { getHomePage } from "./lib/home-page";
import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";

export default function Product(){
  return(
    <Layout>
       <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  )
}
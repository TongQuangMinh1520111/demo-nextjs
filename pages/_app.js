import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/style_res.css";
import React from "react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

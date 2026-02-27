import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "@/src/layouts/PreLoader";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import "@/styles/rtl.css";

function App({ Component, pageProps }) {
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <Head>
        {/* seo begin */}
        <title>QuickEat</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* seo end */}        
      </Head>
      {preLoader && <PreLoader />}
      {!preLoader && <Component {...pageProps} />}
    </Fragment>
  );
}

export default appWithTranslation(App);

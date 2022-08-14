import NextNProgress from "nextjs-progressbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#29D" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

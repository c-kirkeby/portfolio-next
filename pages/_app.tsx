import "../styles/global.css";

import withDarkMode, { MODE } from "next-dark-mode";

import TinaProvider from "../.tina/components/TinaDynamicProvider";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <TinaProvider>
        <Component {...pageProps} />
      </TinaProvider>
    </>
  );
};

export default App;

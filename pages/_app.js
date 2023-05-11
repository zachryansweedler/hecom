import { GlobalStyles } from "@/styles/GlobalStyles";
import Theme from "@/styles/Theme";

function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default App

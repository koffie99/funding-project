import "@/styles/globals.css";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;

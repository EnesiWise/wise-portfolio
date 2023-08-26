import Theme from "../styles/theme";

// import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  return (
    <>
      {/* <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1> */}
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

import { ChakraProvider } from "@chakra-ui/react";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  <>
    <style jsx global>
      {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}
    </style>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>;
}

export default MyApp;

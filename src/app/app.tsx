// pages/_app.tsx
import "../styles/global.css";  // Make sure this path is correct based on your file structure
import type { AppProps } from "next/app";  // Type import for AppProps to type the app correctly

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;  // This renders the page based on the route
}

export default MyApp;

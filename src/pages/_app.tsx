import { type AppProps } from "next/app";
import "../style.css";

export default function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}

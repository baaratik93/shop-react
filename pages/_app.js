import Layout from "../components/Layout";
import "../styles/globals.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

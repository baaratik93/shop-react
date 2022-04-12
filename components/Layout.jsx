import Foot from "./Foot";
import Head from "./Head";
import style from "../styles/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Head />
      <hr />
        {children}
      <Foot />
    </div>
  );
};

export default Layout
import Image from "next/image";
import Menu from "./Menu";
import Search from "./Search";
import Link from "next/link";
import header from "../styles/header.module.css";
import { isConnected } from "../helpers/api";
import { useRouter } from "next/router";
const Head = () => {
  const router = useRouter()
  const disconnectHandler = ()=> {
    try {
      localStorage.removeItem('keyen')
    } catch (error) {
      console.error(error);
    }
    router.replace('/')
  }
  return (
    <>
      <div className={header.header}>
        <div className={header.logo}>
          <Image src="/logo.png" height={90} width={100} />
          <span>
            do
            <span>
              o<span>r</span>
            </span>
            o
          </span>
        </div>
        <nav>{isConnected() && <Menu />}</nav>
        <Search className={header.search} />
        <div className={header.btnMenu}>&#9776;</div>
        <div className={header.vertical}>{isConnected() && <Menu />}</div>
        {!isConnected() && (
          <div className="credentials">
            <Link href="/auth/login">
              <a>Connexion</a>
            </Link>
            <Link href="/auth/register">
              <a>Inscription</a>
            </Link>
          </div>
        )}
        {
          isConnected() && <button onClick={disconnectHandler}>Logout</button>
        }
      </div>
    </>
  );
};

export default Head;
